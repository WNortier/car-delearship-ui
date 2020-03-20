<template>
  <!-- <div class="small">
    <bar-chart :chartdata="chartdata" :options="options"></bar-chart>
    <button @click="fillData()">Randomize</button>
  </div>-->

  <div class="container">
    <!-- <bar-chart :chartdata="chartdata" :options="options" /> -->

    <bar-chart v-if="loaded" :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
import axios from "axios";
export default {
  components: {
    BarChart
  },
  data: () => ({
    loaded: false,
    chartdata: {
      labels: null,
      datasets: [{
        label: "Data One",
        backgroundColor: [],
        data: []
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }),
  methods: {
    generateColor: function () {
      while (this.count > 0) {
        this.chartdata.datasets[0].backgroundColor.push("#" + ((Math.random() * 0xffffff) << 0).toString(16))
        this.count--
      }
    }
  },
  async mounted() {
    this.loaded = false;
    try {
      axios.get("https://api-tutor.herokuapp.com/v1/cars").then(r => {
        const response = r.data;
        //console.log(response)
        //var myArray = [];
        var makes = response.map(function (el) {
          return el.make;
        });

        var noDuplicateMakes = makes.filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        });

        var occurrences = {};
        for (var i = 0, j = makes.length; i < j; i++) {
          occurrences[makes[i]] = (occurrences[makes[i]] || 0) + 1;
        }
        this.count =  Object.keys(occurrences).length
        this.generateColor();
        this.chartdata.labels = Object.keys(occurrences);
        this.chartdata.datasets[0].label = Object.keys(occurrences);
        this.chartdata.datasets[0].data = Object.values(occurrences);
        this.loaded = true;
      });
    } catch (e) {
      console.error(e);
    }
  }

  // name: "LineChartContainer",
  // components: { BarChart },
  // data: () => ({
  //   loaded: false,
  //   chartdata: null,
  //    options: {
  //     responsive: true,
  //     maintainAspectRatio: false
  //   }
  // }),
  // async mounted() {
  //   this.loaded = false;
  //   try {
  //     axios.get("https://api-tutor.herokuapp.com/v1/cars").then(r => {
  //       console.log(r.data);
  //       this.chartdata = r.data[0];
  //       this.loaded = true;
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // ,
  // data () {
  //   return {
  //     datacollection: null
  //   }
  // },
  // mounted () {
  //   this.fillData()
  // },
  // methods: {
  //   fillData () {
  //     this.datacollection = {
  //       labels: [this.getRandomInt(), this.getRandomInt()],
  //       datasets: [
  //         {
  //           label: 'Toyota',
  //           backgroundColor: '#C34E35',
  //           data: [this.getRandomInt(), this.getRandomInt()]
  //         }, {
  //           label: 'BMW',
  //           backgroundColor: '#C3A735',
  //           data: [this.getRandomInt(), this.getRandomInt()]
  //         }
  //       ]
  //     }
  //   },
  //   getRandomInt () {
  //     return Math.floor(Math.random() * (50 - 5 + 1)) + 5
  //   }
  // }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>