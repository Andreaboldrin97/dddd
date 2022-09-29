window.Vue = require('vue');

// IMPORTIAMO IL COMPONENTE App
import App from './views/App.vue';

const app = new Vue({
    el: '#root',
    render: h => h(App) // MOSTRIAMO APP ALL'AVIO DI VUE
});