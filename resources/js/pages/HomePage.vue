<template>
  <div class="container">
    <div class="row">
            <postCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
// IMPORTIAMO AXIOS
import axios from 'axios'
import postCard from '../components/MainComponents/PostCard.vue'

export default {
components: {
        postCard,
    },
data : function(){
        return{
            posts : [],
            activeTagPost : false
        }
    },

methods: {
        getPost : function(){
            axios.get('api/post')
            .then((element)=> {
                this.posts = element.data.resoult ;
                console.log(this.posts);
            })
            .catch((error) => {
                console.log(error);
            })
        },
    },
 created(){
       this.getPost();
    }

}
</script>

<style>

</style>