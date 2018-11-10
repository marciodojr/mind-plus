<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="$emit('ondismiss')">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>New Deck</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark flat @click="saveDeck">Save</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap="">
                            <v-flex xs12 sm6>
                                <v-text-field
                                    label="Deck Name *"
                                    hint="Anything you want to remember: German, Math, Go Language, Javascript ..."
                                    :required="true"
                                    v-model="deck.title"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-text-field
                                    label="Deck Description"
                                    hint="Example: Tips for Vue.js"
                                    v-model="deck.description"
                                    :required="false"
                                ></v-text-field>
                            </v-flex>
                            <small class="red--text">*indicates required field</small>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
export default {
    data() {
        return {
            deck: {
                id: null,
                title: null,
                description: null,
                bookmarked: false,
                strength: 0,
                totalCards: 0
            }
        }
    },
    props: {
        dialog: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    methods: {
        saveDeck() {
            if (!this.deck.title) {
                return
            }
            this.deck.id = Math.round(Math.random() * 1000 + 600)
            this.$emit("onsave", Object.assign({}, this.deck))
        }
    },
    watch: {
        dialog() {
            this.deck.id = null
            this.deck.title = null
            this.deck.description = null
        }
    }
}
</script>
