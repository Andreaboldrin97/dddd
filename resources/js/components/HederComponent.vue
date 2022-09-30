<template>
<div>
    <nav class="navbar bg-dark">
    <div class="container-fluid">
        <div>
             <a class="navbar-brand">BOOLPRES</a>
             <router-link to="/" class="btn btn-outline-success" >
                HOME
             </router-link>
             <router-link to="/about" class="btn btn-outline-success" >
                ABOUT
             </router-link>
             <router-link to="/contact" class="btn btn-outline-success" >
                CONTACT
             </router-link>
        </div>
       <div class="d-flex">
            <div class="d-flex mx-4" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" v-model.trim="needle"  v-on:keyup.enter="$emit('search' , needle)">
            </div>
            <a class="btn btn-outline-success" href="/login">LOGIN</a>
            <a class="btn btn-outline-primary" href="/register">REGISTERED</a>
       </div>
    </div>
</nav>
</div>
</template>

<script>
export default {
    name : 'HeaderComponent',
    data : function(){
        return{
            needle : ''
        }
    },
     methods :{
        log : function(element){
            console.log(element)
        }
    }

}
</script>

<style>
a{
    cursor: pointer;
}


</style>