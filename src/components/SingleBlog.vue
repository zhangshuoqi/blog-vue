<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>作者: {{ blog.author }}</p>
        <p>分类:</p>
        <ul>
            <li v-for="category in blog.categories" :key="category">
                {{ category }}
            </li>
        </ul>
        <button @click="deleteSingleBlog()">删除</button>
        <router-link :to="'/edit/' + id "><button>编辑</button></router-link>
    </div>
</template>

<script>
import axios from '../axios-auth'
    export default{
        name:'single-blog',
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        methods:{
            deleteSingleBlog(){
                // this.$http.delete('https://wd4780122795tsbgnr.wilddogio.com/posts/' + this.id + '.json')
                axios.delete('/posts/' + this.id + '.json')
                .then(respone =>{
                    this.$router.push({path:'/'})
                })
            }
        },
        created(){
            // this.$http.get('https://wd4780122795tsbgnr.wilddogio.com/posts/' + this.id + '.json')
            axios.get('/posts/' + this.id + '.json')
            .then((data)=>{
                // console.log(data.data);
                this.blog = data.data;
            })
        }
    }
</script>

<style>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }



</style>
