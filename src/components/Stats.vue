<template>
  <!-- <div class="small">
    <bar-chart :chartData="chartData" :options="options"></bar-chart>
    <button @click="fillData()">Randomize</button>
  </div>-->

  <div class="Statistics">
    <section id="actions" class="py-4 mb-4 bg-light">
      <b-container>
        <b-row>
          <div class="col-md-3 my-1">
            <button class="btn btn-primary btn-block text-white">
              <i class="fas fa-plus"></i>
              Total Inventory
            </button>
          </div>
          <div class="col-md-3 my-1">
            <b-dropdown
              id="dropdown-1"
              :text="colorDropDownText"
              class="text-white"
              block
              variant="warning"
            >
              <b-dropdown-item
                varient="dark"
                v-for="(color, index) in colors"
                :key="index"
                :value="color"
                @click="colorDropDownText = color; applyColorFilter()"
              >{{color}}</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="col-md-3 my-1">
            <b-dropdown id="dropdown-1" :text="makeDropDownText" block variant="success">
              <b-dropdown-item
                varient
                v-for="(make, index) in makes"
                :key="index"
                :value="make"
                text-white
                class="text-white"
                @click="makeDropDownText = make; applyMakeFilter()"
              >{{make}}</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-row>
      </b-container>
    </section>
    <b-container>
      <!-- <bar-chart :chartData="chartData" /> -->
      <bar-chart ref='chart' v-if="loaded" :chartData="chartData" :labels="labels" />
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "./BarChart.vue";
import axios from "axios";
export default {
  props: ["stock"],
  components: {
    BarChart
  },
  data: () => ({
    colorDropDownText: "Select Color",
    makeDropDownText: "Select Make",
    loaded: true,
    chartData: [],
    labels: []
  }),
  methods: {
    generateColor: function() {
      for (let x = 0; x < this.chartData.length; x++) {
        this.chartData[x].backgroundColor.push(
          "#" + ((Math.random() * 0xffffff) << 0).toString(16)
        ); 
      }
    },
    applyMakeFilter: function() {
      this.loaded = false;
      var vm = this;
      this.chartData.length = 0;

      var selectedMakes = this.stock.filter(function(el) {
        return el.make == vm.makeDropDownText;
      });
      var models = selectedMakes.map(function(el) {
        return el.model;
      });
      const occurrences = {};
      for (var i = 0, j = models.length; i < j; i++) {
        occurrences[models[i]] = (occurrences[models[i]] || 0) + 1;
      }
      // console.log(occurrences);
      // this.count = Object.keys(occurrences).length;
      // this.chartData.labels = Object.keys(occurrences);
      // this.chartData.datasets[0].data = Object.values(occurrences);
      // this.loaded = true
      // vm.$refs.chart.update()
      
      //console.log(occurrences)
      var keys = Object.keys(occurrences);
      var values = Object.values(occurrences);
      for (let y = 0; y < Object.keys(occurrences).length; y++) {
        
        this.chartData.push({label:keys[y],backgroundColor:[],data:[values[y]]})
      }
        this.labels[0] = "Makes"
        this.generateColor();
        this.loaded = true;


    }
  },
  mounted() {
    this.$store.dispatch("setColors");
    this.$store.dispatch("setMakes");
  },
  // async mounted() {
  //   this.loaded = false;
  //   try {
  //     axios.get("https://api-tutor.herokuapp.com/v1/cars").then(r => {
  //       const response = r.data;

  //       // console.log(response)
  //       var makes = response.map(function (el) {
  //         return el.make;
  //       });
  //       const occurrences = {};
  //       for (var i = 0, j = makes.length; i < j; i++) {
  //         occurrences[makes[i]] = (occurrences[makes[i]] || 0) + 1;
  //       }
  //       this.count = Object.keys(occurrences).length;
  //       this.generateColor();
  //       this.chartData.labels = Object.keys(occurrences);
  //       this.chartData.datasets[0].label = Object.keys(occurrences);
  //       this.chartData.datasets[0].data = Object.values(occurrences);
  //       this.loaded = true;
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },
  created() {
    //     this.loaded = false;
    // var makes = this.stock.map(function (el) {
    //       return el.make;
    //     });
    //      const occurrences = {};
    //     for (var i = 0, j = makes.length; i < j; i++) {
    //       occurrences[makes[i]] = (occurrences[makes[i]] || 0) + 1;
    //     }
    //     this.count = Object.keys(occurrences).length;
    //     this.generateColor();
    //     this.chartData.labels = Object.keys(occurrences);
    //     this.chartData.datasets[0].label = Object.keys(occurrences);
    //     this.chartData.datasets[0].data = Object.values(occurrences);
    //     this.loaded = true;
  },
  computed: mapState(["inventory", "colors", "makes", "range"])
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>