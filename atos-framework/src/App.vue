<template>
  <div>
     <h1>{{ message }}</h1>
     <button @click="readMyName()">Click Me</button>
     <h2>{{ myName }}</h2> 
     <hr>
     <div class="container">
         <router-view></router-view>
     </div> 
      

  </div>
  
</template>

<script>
  import Post from './components/Post.vue';
export default {
    components: {
       'app-post': Post
    },
    data: function(){
      return {
        message: "Salam this page is app vue",
        myName: ""
      }
    },
    methods: {
      readMyName: function() {
        this.myName = "Mohamed IDBRAHIM";
      }
    }
}
</script>

<style>

</style>
