<template>
  <div class="container">
      <div :class="activeTagPost ? 'd-block' : 'd-none'">
        <div class="row">
            <tagPostsCard v-for="tagPost in tagPosts.posts" :key="tagPost.id" :tagPost="tagPost"/>
        </div>
      </div>
    <div :class="activeTagPost ? 'd-none' : 'd-block'">
        <div class="row">
                <postCard v-for="post in posts" :key="post.id" :post="post" @searchTagId="searchTagId"/>
        </div>
    </div>
  </div>
</template>

<script>
// IMPORTIAMO AXIOS
import axios from 'axios'
import postCard from './MainComponents/PostCard.vue'
import tagPostsCard from './MainComponents/TagPostsCard.vue'

export default {
name : 'app',
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

        
        searchTagId(needle){
            this.activeTagPost = true,
             axios.get('api/tag/'+needle)
            .then((element)=> {
                this.tagPosts = element.data.resoult ;
                console.log(this.tagPosts);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
 created(){
       this.getPost();
    }

}
</script>

<style>

</style>