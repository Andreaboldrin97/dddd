<template>
    <div class="my-4 col-6 ">
        <div class="card m-3">
            <h3 class="mx-3">
                {{ tagPost.user.name }}
                </h3>
            <div class="card-img d-flex justify-content-center">
                <img  :src="isValidUrl( tagPost.image_url ) ? tagPost.image_url : 'storage/' + tagPost.image_url " class="card-img-top" alt="image-post"> 
            </div>
            <div class="card-body">
                <h4>
                    {{ tagPost.title }}
                </h4>
                <p class="card-text">
                    {{ tagPost.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['tagPost'],
    created(){
        console.log(this.tagPost)
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

</style>