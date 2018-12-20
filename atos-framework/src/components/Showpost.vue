<template>
    <div>
         <h1>Show post</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, recusandae.  </p>
    </div>
  
</template>


<script>

    export default {
        data: function() {
            return {
                id: null
            }
        },
        created: function(){
            this.id = this.$route.params.id;
            console.log(this.id)
        }
    }

</script>


<style>

</style>