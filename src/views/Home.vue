<template>
  <div class="home">

    <section id="actions" class="py-4 mb-4 bg-light">
      <b-container>
        <b-row>
          <div class="col-md-3 my-1">
            <router-link class="btn btn-primary btn-block text-white" to="/inventory"><i class="fas fa-plus"></i> View
              Inventory</router-link>
          </div>
          <div class="col-md-3 my-1">
            <router-link class="btn btn-warning btn-block text-white" to="/"><i class="fas fa-plus"></i> View Makes
            </router-link>
          </div>
          <div class="col-md-3 my-1">
            <router-link class="btn btn-success btn-block text-white" to="/"><i class="fas fa-plus"></i> View Inventory
            </router-link>
          </div>
        </b-row>
      </b-container>
    </section>

    <Jumbotron msg="Welcome to Autos Inventory" />
  </div>
</template>


<script>
// @ is an alias to /src
import Jumbotron from "@/components/Jumbotron.vue";
import {mapGetters} from 'vuex'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      partnerz: []
    };
  },
  components: {
    Jumbotron
  },
  computed: {
    ...mapGetters(["inventory"])
    //...mapActions(["searchPool"])

    //         ,
    // getPartners() {
    //   return this.$store.getters.partners[0];
    // }
  }
};
</script>
