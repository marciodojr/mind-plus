<template>
  <v-container fluid>
    <v-layout row justify-end>
      <v-btn fab small dark color="primary">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab small dark color="error">
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>
    </v-layout>
    <v-layout column>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.commit("setLayout", "DashboardLayout");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
