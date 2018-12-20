new Vue({
    el: '#app',
    data: {
        message: "page posts",
        myPosts: []
    },
    methods: {
        getPosts: function() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => this.myPosts = res.data)
            .catch(err => console.log(err.message))
        }
    },
    created: function(){
        this.getPosts();
    }
})