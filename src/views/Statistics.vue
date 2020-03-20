<template>
    <div>
        <stats :inventory="inventory"></stats>
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
    computed: {
        ...mapGetters(["inventory"])
    }
}; 

</script>
