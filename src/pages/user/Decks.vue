<template>
    <v-layout row mt-5>
        <v-flex xs12>
            <v-card>
                <v-toolbar color="light-blue" dark>
                    <v-toolbar-side-icon>
                        <v-icon>layers</v-icon>
                    </v-toolbar-side-icon>
                    <v-toolbar-title>Decks</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                    <v-btn icon @click="createNewDeck">
                        <v-icon>add</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-list three-line>
                    <template v-for="(item, index) in deckList">
                        <v-divider v-if="index" :key="'d' + item.id"></v-divider>
                        <v-list-tile :key="item.id" avatar @click="goToDeck(item.id)">
                            <v-list-tile-avatar>
                                <v-icon color="teal">face</v-icon>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                                <v-list-tile-sub-title>{{item.description}}</v-list-tile-sub-title>
                                <v-list-tile-sub-title>Nº Cards: #{{item.totalCards}}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-rating
                                    v-model="item.strength"
                                    :dense="true"
                                    :readonly="true"
                                    :half-increments="true"
                                    background-color="orange lighten-3"
                                    color="orange"
                                ></v-rating>
                            </v-list-tile-action>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
        <new-deck :dialog="openNewDeck" @ondismiss="openNewDeck = false" @onsave="addToDeckList"></new-deck>
    </v-layout>
</template>
<script>
import NewDeck from "@/components/NewDeck"

export default {
    components: {
        NewDeck
    },
    data() {
        return {
            openNewDeck: false,
            deckList: [
                {
                    id: 1,
                    title: "Vue.js",
                    description: "Vue.js tips and tricks",
                    bookmarked: false,
                    strength: 0,
                    totalCards: 170
                },
                {
                    id: 2,
                    title: "Nuxt.js",
                    description: "Something to do SSR and some optimizations",
                    bookmarked: true,
                    strength: 3.3,
                    totalCards: 9
                },
                {
                    id: 3,
                    title: "Vuetify.js",
                    description: "The philosophy of beauty",
                    bookmarked: true,
                    strength: 5,
                    totalCards: 6
                },
                {
                    id: 4,
                    title: "PHP",
                    description: "Creating APIs",
                    bookmarked: true,
                    strength: 5,
                    totalCards: 125
                },
                {
                    id: 5,
                    title: "Docker",
                    description: "Containers on the rescue",
                    bookmarked: false,
                    strength: 5,
                    totalCards: 20
                },
                {
                    id: 6,
                    title: "Kubernetes",
                    description: "Devops, here we go!",
                    bookmarked: false,
                    strength: 2,
                    totalCards: 50
                }
            ]
        }
    },
    methods: {
        strengthColor(strength) {
            if (strength < 50) {
                return "red darken-3"
            }

            if (strength < 70) {
                return "yellow darken-2"
            }

            if (strength < 90) {
                return "green accent-4"
            }

            if (strength < 100) {
                return "light-blue darken-2"
            }

            return "light-blue darken-4"
        },
        goToDeck(deckId) {
            this.$router.push(`/user/decks/${deckId}`)
        },
        createNewDeck() {
            this.openNewDeck = true
        },
        addToDeckList(newDeck) {
            this.openNewDeck = false
            this.deckList.unshift(newDeck)
        }
    }
}
</script>
