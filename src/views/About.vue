<template>
  <div class="about">
    <h1>Inventory</h1>
    <b-button @click="getColors">GET</b-button>

              <b-dropdown id="dropdown-1" :text="selectedColor" class="m-md-2">
            <b-dropdown-item
              varient="dark"
              v-for="(color, index) in colors"
              :key="index"
              :value="color"
              @click="selectedColor = color"
            >{{color}}</b-dropdown-item>
          </b-dropdown>

    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12">
          <b-table refs="table" id="my-table" v-if="totalInventory" :items="inventory"></b-table>
          <b-table refs="table" id="my-table" v-else-if="!totalInventory" :items="filteredInventory"></b-table>
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
      selectedColor: "Blue",
      testItems: [
        {
          make: "Volkswagen",
          model: "Jetta",
          color: "Blue",
          price: 147285,
          reg_number: "CY 73015"
        }
      ],
      totalInventory: true
    };
  },
  mounted() {
    this.totalInventory = true;
    this.$store.dispatch("loadInventory");
    this.$store.dispatch("loadColors")
  },
  methods: {
    getColors() {
      this.totalInventory = false
      this.$store.dispatch("getColors", this.selectedColor);
    }
  },

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
  computed: mapState(["inventory", "filteredInventory", "colors"])
};
</script>

<style lang="stylus" scoped></style>


