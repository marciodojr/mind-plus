import Vue from "vue"
import VueRouter from "vue-router"

import PageNotFound from "./../components/PageNotFound"
import Dashboard from "./../components/Dashboard"
import Decks from "./../pages/user/Decks"
import Deck from "./../pages/user/Deck"
import Stats from "./../pages/user/Stats"

const routes = [
    { path: "/", name: "dashboard", component: Dashboard },
    { path: "/user/decks", name: "decks", component: Decks },
    { path: "/user/decks/:deckId", name: "deck", component: Deck },
    { path: "/user/stats", name: "stats", component: Stats },
    { path: "*", name: "404", component: PageNotFound }
]

const router = new VueRouter({
    mode: "history",
    routes
})

Vue.use(VueRouter)

export { router }
