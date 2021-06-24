// import { createApp } from 'vue';

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'

// createApp(App).use(router).mount('#app')

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')