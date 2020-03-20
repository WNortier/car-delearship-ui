<template>
  <!-- <div class="small">
    <bar-chart :chartdata="chartdata" :options="options"></bar-chart>
    <button @click="fillData()">Randomize</button>
  </div>-->

  <div class="Statistics">
    <section id="actions" class="py-4 mb-4 bg-light">
      <b-container>
        <b-row>
          <div class="col-md-3 my-1">
            <button class="btn btn-primary btn-block text-white" @click="getInventory()">
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
    <!-- <bar-chart :chartdata="chartdata" :options="options" /> -->
    <b-container>
      <bar-chart v-if="loaded" :chartdata="chartdata" :options="options" />
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "./BarChart.vue";
import axios from "axios";
export default {
  components: {
    BarChart
  },
  data: () => ({
    colorDropDownText: "Select Color",
    makeDropDownText: "Select Make",
    loaded: false,
    chartdata: {
      labels: null,
      datasets: [
        {
          label: "Data One",
          backgroundColor: [],
          data: []
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }),
  methods: {
    generateColor: function() {
      while (this.count > 0) {
        this.chartdata.datasets[0].backgroundColor.push(
          "#" + ((Math.random() * 0xffffff) << 0).toString(16)
        );
        this.count--;
      }
    }
  },
  async mounted() {
    this.loaded = false;
    try {
      axios.get("https://api-tutor.herokuapp.com/v1/cars").then(r => {
        const response = r.data;
        var makes = response.map(function(el) {
          return el.make;
        });
        const occurrences = {};
        for (var i = 0, j = makes.length; i < j; i++) {
          occurrences[makes[i]] = (occurrences[makes[i]] || 0) + 1;
        }
        this.count = Object.keys(occurrences).length;
        this.generateColor();
        this.chartdata.labels = Object.keys(occurrences);
        this.chartdata.datasets[0].label = Object.keys(occurrences);
        this.chartdata.datasets[0].data = Object.values(occurrences);
        this.loaded = true;
      });
    } catch (e) {
      console.error(e);
    }
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