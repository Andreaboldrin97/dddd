<template>
  <div>
      <postCard :post="post" :key="post.id" />
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
            post: [],
        }
    },
    methods: {
         getSinglePostById(){
             const id = this.$route.params.id
              axios.get(`/api/post/${id}`)
             .then((element)=> {
                 this.post = element.data.resoult ;
                 console.log(element.data);
            })
             .catch((error) => {
                console.log(error);
            })
         }
    },
    created(){
        this.getSinglePostById()
    }

}
</script>

<style>

</style>