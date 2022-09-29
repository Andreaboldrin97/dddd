<template>
<div>
    <nav class="navbar bg-dark">
    <div class="container-fluid">
        <div>
             <a class="navbar-brand">BOOLPRES</a>
             <a class="btn btn-outline-success" href="/">POST</a>
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
    name : 'app',

}
</script>

<style>
a{
    cursor: pointer;
}


</style>