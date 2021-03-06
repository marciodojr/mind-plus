import Vue from "vue"
import "./plugins/vuetify"
import './assets/style.scss';

import "./validator"
import App from "./App.vue"
import { store } from "./store"
import { router } from "./router"
import "./services/api"

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount("#app")
