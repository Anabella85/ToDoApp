import Vue from 'vue'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import i18n from './language'

import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App),
}).$mount('#app')
