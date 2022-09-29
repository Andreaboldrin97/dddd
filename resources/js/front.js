window.Vue = require('vue');
// IMPORTIAMO LE FUNZIONALITA' DI VUE-ROUTER
import VueRouter from 'vue-router';

//! INDICHIAMO L'UTILLIZZO DI VUE ROUTER
Vue.use(VueRouter)

// IMPORTIAMO IL COMPONENTE App
import App from './views/App.vue';
// IMPORTIAMO ROUTE.JS
import router from './router'
import Vue from 'vue';

const app = new Vue({
    el: '#root',
    render: h => h(App), // MOSTRIAMO APP ALL'AVIO DI VUE
    router
});