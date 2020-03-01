<template>
  <div class="about">
    <h1>This is an about page changed</h1>

    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12">
          <b-table :busy="isBusy" refs="table" id="my-table" :items="myProvider">
            <template v-slot:table-busy>
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cars: [],
      items: []
    };
  },
  methods: {
    myProvider: function myProvider(ctx) {
      // this.isBusy = true

      const promise = axios.get(
        "https://api-tutor.herokuapp.com/v1/cars?page=" +
          ctx.currentPage +
          "&size=" +
          ctx.perPage
      );
      // Must return a promise that resolves to an array of items
      return promise.then(res => {
        // Pluck the array of items off our axios response
       
        const items = res.data.splice(0, 10);
        console.log(items);

        // Must return an array of items or an empty array if an error occurred
        return items || [];
      });
    }
  }
};
</script>

<style lang="stylus" scoped></style>


