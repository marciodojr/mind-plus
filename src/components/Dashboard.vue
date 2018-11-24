<template>
  <v-container fluid>
    <v-layout row justify-end>
    </v-layout>
    <v-layout column>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    created() {
        this.$store.commit("setLayout", "DashboardLayout")
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
