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
      },
      labels: {
        type: Array,
        default: null
      }
    },
    mounted() {
      this.render()
    },
    watch: {
      chartData(to, from) {
        console.log("here");
        this.render()
      }
    },
    methods: {
      render() {
        this.renderChart({
          labels: this.labels,
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