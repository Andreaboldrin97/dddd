<template>
<div class="body-app pb-3">
    <HeaderComponent/>

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
    
}
</script>

<style scoped>
.body-app{
    background-color: rgb(43, 36, 36);
    height: 100%;
}

</style>