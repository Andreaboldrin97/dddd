<template>
<div class="body-app pb-3">
    <HeaderComponent/>
    <MainComponent/>
</div>
</template>

<script>

import MainComponent from '../components/Main.vue'
import HeaderComponent from '../components/Heder.vue'

export default {
    
    components: {
        HeaderComponent,
        MainComponent
    },
    
}
</script>

<style>
.body-app{
    background-color: rgb(43, 36, 36);
}

</style>