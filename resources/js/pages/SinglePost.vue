<template>
  <div>
      ciao
  </div>
</template>

<script>
export default {
     data : function(){
        return{
            singlePost : [],
        }
    },
    methods: {
         getSinglePostById(needle){
              axios.get('api/post/'+needle)
             .then((element)=> {
                 this.singlePost = element.data.resoult ;
                 console.log(this.singlePost);
            })
             .catch((error) => {
                console.log(error);
            })
         }
    }

}
</script>

<style>

</style>