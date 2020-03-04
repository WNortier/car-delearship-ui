<template>
  <div class="Inventory">

    <section id="actions" class="py-4 mb-4 bg-light">
      <b-container>
        <b-row>
          <div class="col-md-3 my-1">
            <button class="btn btn-primary btn-block text-white" @click="getInventory()"><i class="fas fa-plus"></i>
              Total Inventory
            </button>
          </div>
          <div class="col-md-3 my-1">
            <b-dropdown id="dropdown-1" :text="colorDropDownText" class="text-white" block variant="warning">
              <b-dropdown-item varient="dark" v-for="(color, index) in colors" :key="index" :value="color"
                @click="colorDropDownText = color; applyColorFilter()">{{color}}</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="col-md-3 my-1">
            <b-dropdown id="dropdown-1" :text="makeDropDownText" block variant="success">
              <b-dropdown-item varient="" v-for="(make, index) in makes" :key="index" :value="make" text-white
                class="text-white" @click="makeDropDownText = make; applyMakeFilter()">{{make}}</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-row>
        <b-row>
          <div class="col-md-9">
            <template>
              <div>
                <label for="range-1">Example range with min and max</label>
                <b-form-input id="range-1" v-model="value" type="range" min="0" max="100" @change="getRangeOnCurrentFilter()"></b-form-input>
                <div class="mt-2">Value: {{ value }}</div>
              </div>
            </template>
          </div>
        </b-row>
      </b-container>
    </section>

    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12">
          <b-table refs="table" id="my-table" v-if="totalInventory && !rangeFilter" :items="inventory"></b-table>
          <!-- <b-table refs="table" id="my-table" v-else-if="!totalInventory && !rangeFilter && colorFilter" :items="filteredColors"></b-table>
           <b-table refs="table" id="my-table" v-else-if="!totalInventory && !rangeFilter && makeFilter" :items="filteredMakes"></b-table> -->
           <b-table refs="table" id="my-table" v-else-if="rangeFilter" :items="range"></b-table>
          <!-- <b-table refs="table" id="my-table" :items="myProvider"> -->
          <template v-slot:table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Loading...</strong>
            </div>
          </template>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import { mapState } from "vuex";

// import axios from "axios";
export default {
  data() {
    return {
      cars: [],
      colorDropDownText: "Select Color",
      makeDropDownText: "Select Make",
      testItems: [
        {
          make: "Volkswagen",
          model: "Jetta",
          color: "Blue",
          price: 147285,
          reg_number: "CY 73015"
        }
      ],
      totalInventory: true,
      // colorFilter: false,
      // makeFilter: false,
      rangeFilter: false,
      value: ""
    };
  },
  mounted() {
      this.totalInventory = true;
      this.$store.dispatch("getInventory");
      this.$store.dispatch("setColors")
      this.$store.dispatch("setMakes")
    },
    methods: {
      applyColorFilter() {
        // this.totalInventory = false
        // this.makeFilter = false
        // this.rangeFilter = false
        // this.colorFilter = true
        this.$store.dispatch("getColors", this.colorDropDownText);
      },
      applyMakeFilter() {
        // this.totalInventory = false
        // this.colorFilter = false
        // this.rangeFilter = false
        // this.makeFilter = true
        this.$store.dispatch("getMakes", this.makeDropDownText);
      },
      getInventory() {
        // this.colorFilter = false
        // this.makeFilter = false
        this.rangeFilter = false
        this.value = 50
        this.$store.dispatch("getInventory");
      },
      getRangeOnCurrentFilter(){
        var decider = {colors:this.colorFilter, makes:this.makesFilter, inventory:this.totalInventory}
        var keys = Object.keys(decider);
        var filtered = keys.filter(function (key) {
          return decider[key]
        });
        console.log(filtered)
        switch(filtered) {
          case filtered.includes("colors"):
            // this.colorFilter = true
            // this.makesFilter = false
            // this.totalInventory = false
            this.rangeFilter = true
            this.$store.dispatch("getRangeOnCurrentFilter", {colors:this.colorFilter, makes:this.makesFilter, inventory:this.totalInventory, amount: this.value})
            break;
          case filtered.includes("makes"):
            // this.makesFilter = true
            // this.colorFilter = false
            // this.totalInventory = false
            this.rangeFilter = true
            this.$store.dispatch("getRangeOnCurrentFilter", {colors:this.colorFilter, makes:this.makesFilter, inventory:this.totalInventory, amount: this.value})
            break;
          default:
            // this.makesFilter = false
            // this.colorFilter = false
            // this.totalInventory = true
            this.rangeFilter = true
            this.$store.dispatch("getRangeOnCurrentFilter", {colors:this.colorFilter, makes:this.makesFilter, inventory:this.totalInventory, amount: this.value})
        }
      }
  },
  computed: mapState(["inventory", "colors", "makes", "range"])
    // methods: {
  //   myProvider: function myProvider(ctx) {
  //     const promise = axios.get(
  //       "https://api-tutor.herokuapp.com/v1/cars?page=" +
  //         ctx.currentPage +
  //         "&size=" +
  //         ctx.perPage
  //     );
  //     return promise.then(res => {
  //       const items = res.data.splice(0, 10);
  //       this.$store.state.carPool = res.data.splice(0, 10);
  //       console.log(this.$store.state.carPool);
  //       return items || [];
  //     });
  //   }
  // }
  // ,
};
</script>

<style lang="scss" scoped>
$btn-warning-color: white 

</style>


