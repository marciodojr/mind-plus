<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" persistent app dark clipped mini-variant>
            <v-list class="pt-0">
                <v-list-tile v-for="(item, i) in items" :key="i" :to="item.route">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed color="primary" clipped-left dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Mind Plus</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <v-btn icon slot="activator" color="primary">
                    <v-icon large>account_circle</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>Sair</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
        <v-content>
            <v-container>
                <v-slide-x-transition mode="out-in">
                    <router-view></router-view>
                </v-slide-x-transition>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "DashboardLayout",
    data() {
        return {
            mini: true,
            drawer: true,
            items: [
                {
                    icon: "layers",
                    title: "Decks",
                    route: "/user/decks"
                },
                {
                    icon: "trending_up",
                    title: "Statistics",
                    route: "/user/stats"
                }
            ]
        }
    },
    methods: {
        logout() {
            this.$store.commit("setAuthToken", "")
            this.$router.push("/")
        }
    }
}
</script>

<style lang="scss">
.v-list__tile--active {
    .v-list__tile__action,
    .v-list__tile__content {
        color: white;
    }
    background-color: #616161;
}
</style>
