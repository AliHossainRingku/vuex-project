<template>
        <form action="" @submit="updatePost(post)">
            <h4 class="text-center font-weight-bold">Update post form</h4>
            <div class="form-group">
                <input type="text" placeholder="Post title" v-model="post.title" class="form-control">

            </div>
            <div class="form-group">
                <input type="text" placeholder="User name" v-model="post.user_name" class="form-control">

            </div>
            <div class="form-group">
                <textarea v-model="post.content" placeholder="Post content" class="form-control">

                </textarea>
            </div>
            <div class="form-group">
                <button :disabled="!isValid" class="btn btn-block btn-primary" @click.prevent="updatePost(post)">Submit
                </button>
            </div>
        </form>
</template>

<script>
    export default {
        name: "UpdatePost",
        data() {
            return {
                post: {
                    title: '',
                    user_name: '',
                    content: ''
                }
            }
        },
        methods: {
            updatePost(post) {
                this.$store.dispatch('updatePost', post)
            }
        },
        computed: {
            isValid() {
                return this.post.title !== '' && this.post.user_name !== '' && this.post.content !== ''
            }
        }
    }
</script>

<style scoped>

</style>