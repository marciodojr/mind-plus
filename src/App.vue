<template>
    <component v-bind:is="layout"></component>
</template>

<script>
import DashboardLayout from "./layouts/DashboardLayout"
import SimpleLayout from "./layouts/SimpleLayout"

export default {
    computed: {
        layout() {
            return this.$store.getters.layout
        }
    },
    components: {
        // eslint-disable-next-line
        DashboardLayout,
        // eslint-disable-next-line
        SimpleLayout
    }
}
</script>