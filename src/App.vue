<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
        >
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>
