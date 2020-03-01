<template>
  <div class="home">
    <Jumbotron msg="Welcome to Your Vue.js App" />
    <p>{{searchPool}}</p>
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
    ...mapGetters(["partners"]),
    ...mapActions(["searchPool"])

    //         ,
    // getPartners() {
    //   return this.$store.getters.partners[0];
    // }
  }
};
</script>
