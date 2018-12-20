<template>
  <div class="row">  
   <div class="col-md-12">
       <h1>New post</h1>

       <div class="form-group">
         <label for="title">title</label>
         <input v-model="postData.title" type="text" name="title" id="title" class="form-control" placeholder="" aria-describedby="helpId">
       </div>

       <div class="form-group">
            <label for="">body</label>
            <input v-model="postData.body" type="text" name="body" id="body" class="form-control" placeholder="" aria-describedby="helpId">
        </div>

        <button @click="addPost()" class="btn btn-danger btn-block"><i class="fa fa-paper-plane"></i> Add</button>
        <hr>
      
   </div>
</div>
</template>


<script>
  import axios from 'axios';
  export default {
    data: function() {
        return {
            urlApi: 'https://jsonplaceholder.typicode.com/posts',
            postData: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        addPost(){
            axios.post(this.urlApi, this.postData)
                 .then((res) => {
                     this.$router.push('/');
                 })
                 .catch((err) => console.log(err.message))
        },
        resetForm() {
            this.postData = {
                title: '',
                body: ''
            }
        }
    }
    
  }
</script>


<style>

</style>