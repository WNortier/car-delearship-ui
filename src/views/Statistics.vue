<template>
    <div>
        <stats :stock="inventory"></stats>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stats from "@/components/Stats.vue";

export default {
    data() {
        return {};
    },
    components: {
        Stats
    },
    mounted() {
        this.$store.dispatch("getInventory");
    },
    computed: {
        ...mapGetters(["inventory"])
    }
};
</script>
