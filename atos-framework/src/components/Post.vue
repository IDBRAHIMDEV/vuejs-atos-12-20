<template>
  <div class="row">  
   <div class="col-md-12">
       <h1>List of posts</h1>
        
       <div class="text-right mb-3">
           <router-link to="/post/new">New post</router-link>
       </div>
       <table class="table table-hover">
           <thead>
               <tr>
                   <th>title</th>
                   <th>body</th>
                   <th></th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="post in myPosts">
                   <td scope="row">{{ post.title }}</td>
                   <td>{{ post.body }}</td>
                   <td class="text-right">
                       <router-link :to="{name: 'post', params: {id: post.id}}">Show</router-link>
                   </td>
               </tr>
         
           </tbody>
       </table>
   </div>
</div>
</template>


<script>
  import axios from 'axios';
  export default {
    data: function() {
        return {
            urlApi: 'https://jsonplaceholder.typicode.com/posts',
            myPosts: []
        }
    },
    methods: {
        getPosts: function() {
            axios.get(this.urlApi)
                 .then((res) => this.myPosts = res.data)
                 .catch((err) => console.log(err.message))
        }
    },
    created: function() {
        this.getPosts();
    }
  }
</script>


<style>

</style>