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
import tagPostsCard from '../components/MainComponents/TagPostsCard.vue'

export default {
components: {
        postCard,
        tagPostsCard,
    },
data : function(){
        return{
            posts : [],
            tagPosts : [],
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

        
        // searchTagId(needle){
        //     this.activeTagPost = true,
        //      axios.get('api/tag/'+needle)
        //     .then((element)=> {
        //         this.tagPosts = element.data.resoult ;
        //         console.log(this.tagPosts);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        // }
    },
 created(){
       this.getPost();
    }

}
</script>

<style>

</style>