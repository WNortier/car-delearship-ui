<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
    mixins: [mixins.reactiveProp],
    props: {
      chartData: {
        type: Array,
        default: null
      }
    },
    mounted() {
      this.render()
      //this.renderChart(this.chartData, this.options);
    },
    watch: {
      chartData(to, from) {
        console.log("hi")
        this.render()
      }
    },
    methods: {
      render() {
        this.renderChart({
          labels: ["Makes"],
          datasets:
            this.chartData
        }, {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        })
      }
    }
  };
</script>