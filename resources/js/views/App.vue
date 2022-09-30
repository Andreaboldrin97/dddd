<template>
<div class="body-app pb-3">
    <HeaderComponent @search="searchByTitle"/>

    //! INSERIAMO QUI LE ROUTER INDICATE DALL'USER
   <router-view></router-view>
</div>
</template>

<script>

import HeaderComponent from '../components/HederComponent.vue'

export default {
    
    components: {
        HeaderComponent,
    },
    data: function(){
        return {
             searchTitle : ''
        }
    },
    methods :{

        searchByTitle(needle){
            this.searchTitle = needle ;
            this.$router.push( { name :'seachPost',
                                params : { title : needle } 
                                }) 
                        .catch(err => {});
        }
    },
    
}
</script>

<style scoped>


</style>