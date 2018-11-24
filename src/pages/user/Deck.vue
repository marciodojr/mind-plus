<template>
    <div>
        <h1 class="grey--text text--darken-2"> {{info.title}} (#{{info.totalCards}} Cards)</h1>
        <br>
        <h2 class="grey--text text--darken-2 font-italic font-weight-regular">{{info.description}}</h2>
        <hr>
        <v-layout row wrap mt-4>
        <v-flex xs12 sm4 md3 v-for="(card, idx) in cards" :key="idx" pa-2>
            <v-card>
                <v-card-title primary-title>
                    <h4 class="mb-0 primary--text">#{{idx + 1}} - {{card.question}}</h4>
                </v-card-title>
                <v-card-title class="pr-0">
                    <h2 class="grey--text text--darken-2 font-italic font-weight-regular" v-if="answers[card.id]">
                        {{card.answer}}
                    </h2>
                    <v-spacer></v-spacer>
                    <v-btn flat icon color="grey darken-2" @click="toggleAnswer(card.id)" large>
                        <v-icon v-if="answers[card.id]">visibility</v-icon> <v-icon v-else>visibility_off</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-actions color="grey">
                    <v-btn flat>Editar</v-btn>
                    <v-btn flat color="red">Remover</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        </v-layout>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info: {
                id: 1,
                title: "Deutsch",
                description: "Deutsch Fragen",
                bookmarked: true,
                strength: 0,
                totalCards: 5
            },
            cards: [
                {
                    id: 1,
                    question: "Magst du Katzen?",
                    answer: "Ja, Kazen sind sehr Schön"
                },
                {
                    id: 2,
                    question: "Magst du Hunde?",
                    answer: "Ja, Hund sind sehr Schön"
                },
                {
                    id: 3,
                    question: "Magst du Enten?",
                    answer: "Ja, Enten sind sehr Schön"
                },
                {
                    id: 4,
                    question: "Magst du Fliegen?",
                    answer: "Ja, Fliegen sind sehr Schön"
                },
                {
                    id: 5,
                    question: "Magst du Vögel?",
                    answer: "Ja, Vögel sind sehr Schön"
                }
            ],
            answers: {}
        }
    },
    methods: {
        toggleAnswer(cardId) {
            this.$set(this.answers, cardId, !this.answers[cardId])
        }
    }
}
</script>
