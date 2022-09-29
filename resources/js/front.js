import Vue from 'vue';


// IMPORTIAMO IL COMPONENTE App
import App from './views/App.vue';
// IMPORTIAMO ROUTE.JS
import router from './router';

const app = new Vue({
    el: '#root',
    render: h => h(App), // MOSTRIAMO APP ALL'AVIO DI VUE
    router
});