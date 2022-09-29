<template>
<div>
    <nav class="navbar bg-dark">
    <div class="container-fluid">
        <div>
             <a class="navbar-brand">BOOLPRES</a>
             <router-link to="/" class="btn btn-outline-success" >
                HOME
             </router-link>
             <router-link to="/" class="btn btn-outline-success" >
                ABOUT
             </router-link>
             <router-link to="/" class="btn btn-outline-success" >
                CONTACT
             </router-link>
        </div>
       <div>
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

}
</script>

<style>
a{
    cursor: pointer;
}


</style>