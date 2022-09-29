<template>
  <div class="my-4 col-6 ">
      <div class="card m-3">
            <h3 class="mx-3">
                {{ post.user.name }}
            </h3>
        <div class="card-img d-flex justify-content-center">
            <img  :src="isValidUrl(post.image_url) ? post.image_url : 'storage/' + post.image_url " class="card-img-top" alt="image-post"> 
        </div>
        <div class="card-body">
            <h4>
                {{ post.title }}
            </h4>
            <div class=" badge badge-fill p-1" :style="post.category_id !== null ? 'background-color: ' + post.category.color : 'background-color: red' ">
                <h5 class="m-0" v-if="post.category_id == null"> NO CATEGORY </h5>
                <h5 class="m-0" v-else >{{ post.category.name }} </h5>
            </div>
            <p class="card-text">
                {{ post.description }}
            </p>
        </div>
        <div class="card-footer">
            <span v-for="tag in post.tags" :key="tag.id ">
                <a v-on:click="$emit('searchTagId' , tag.id)">
                    {{ tag.name }}
                </a>
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props : ['post'],
    data : function(){
        return{
            searchTagId : ''
        }
    },

    methods : {
        isValidUrl(str) {
            const regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex .test(str)) {
                return false;
            } else {
                return true;
            }
        }
    }

}
</script>

<style>
.card{
    height: 100%;
}
.card-img{
    height: 300px;
}
img{
    object-fit: cover;
}

</style>