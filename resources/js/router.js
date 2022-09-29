// IMPORTIAMO VUE 
import Vue from 'vue';
import VueRouter from 'vue-router';

//! INDICHIAMO L'UTILLIZZO DI VUE ROUTER
Vue.use(VueRouter)

//? IMPORTIAMO LE SINGOLE PAGINE
import Home from './pages/HomePage';

//! PER OGNI PAGINA AVREMO UN : PATH(uri), NAME(),COMPONENT DI RIFERIMENTO
const router = new VueRouter({
    //* LEVA L'ASTERISCO DELL'URL
    mode: 'history',
    //! INDICHIAMO LE ROTTE POSSIBILI
    routes : [
        {
            path:'/home',
            name: 'home',
            component: Home
        }
    ]
})

export default router;