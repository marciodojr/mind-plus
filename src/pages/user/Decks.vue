<template>
    <v-container>
      <h6 class="headline">
        <v-icon large color="primary">layers</v-icon> Decks
      </h6>
      <v-divider></v-divider>
      <v-layout row mt-5>
        <v-flex xs12 sm8 offset-sm2 elevation-1>
          <v-list three-line>
            <template v-for="(item, index) in items">

              <v-divider
                v-if="index"
                :key="index"
              ></v-divider>

              <v-list-tile
                :key="item.title"
                avatar
                @click="goToDeck(item.id)"
              >
                <v-list-tile-avatar>
                  <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    icon: "face",
                    iconClass: "blue white--text",
                    title: "Photos",
                    subtitle: "Jan 9, 2014"
                },
                {
                    id: 2,
                    icon: "face",
                    iconClass: "blue white--text",
                    title: "Recipes",
                    subtitle: "Jan 17, 2014"
                },
                {
                    id: 3,
                    icon: "face",
                    iconClass: "blue white--text",
                    title: "Work",
                    subtitle: "Jan 28, 2014"
                }
            ]
        }
    },
    methods: {
        // eslint-disable-next-line
        goToDeck(deckId) {}
    }
}
</script>