<template>
    <div>
        
        <h4 class="text-center font-weight-bold">Add New Post</h4>
        <add-post></add-post>
        <update-post></update-post>

        <h4 class="text-center font-weight-bold">Posts</h4>
        <table class="table table-striped" border="1">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">User</th>
                <th scope="col">Content</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(post, index) in posts" :key="post.id">
                <td>{{index+1 }}</td>
                <td>{{post.title}}</td>
                <td>{{post.user_name}}</td>
                <td>{{post.content}}</td>
                <td>
                    <button class="btn btn-danger" @click="updatePost(post)">Edit<i style="color:white" class="fa fa-trash"></i></button>
                    <button class="btn btn-danger" @click="deletePost(post)">Delete<i style="color:red" class="fa fa-trash"></i></button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import AddPost from './AddPost'
    import UpdatePost from './UpdatePost'
    export default {
        name: "Posts",
        components: {
            AddPost,
            UpdatePost,
        },
        mounted() {
            this.$store.dispatch('fetchPosts')
        },
        methods: {
            deletePost(post) {
                this.$store.dispatch('deletePost',post)
            },
            updatePost(post){
                this.$store.dispatch('updatePost',post)
            }
        },
        computed: {
            ...mapGetters([
                'posts'
            ])
        }
    }
</script>

<style scoped>
.table tr {
    border: red 1px solid;
}
</style>