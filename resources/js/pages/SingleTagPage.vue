<template>
<div class="container">
    <div class="row">
        <tagPostsCard v-for="tagPost in tagPosts.posts" :key="tagPost.id" :tagPost="tagPost"/>
    </div>
</div>
</template>

<script>

import axios from 'axios'
import tagPostsCard from '../components/MainComponents/TagPostsCard.vue'
export default {
    components: {
        tagPostsCard,
    },
    data : function(){
        return{
            tagPosts : [],
        }
    },
     methods: {
         getTagId(){
             const id = this.$route.params.id
              axios.get(`/api/tag/${id}`)
             .then((element)=> {
                 this.tagPosts = element.data.resoult ;
                 console.log(element.data);
            })
             .catch((error) => {
                console.log(error);
            })
         }
    },
    created(){
        this.getTagId()
    }

}
</script>

<style>

</style>