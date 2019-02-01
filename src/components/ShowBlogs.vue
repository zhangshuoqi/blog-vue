<template>
  <!-- <div v-theme:column="'wide'" id="show-blogs"> -->
  <div id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filterBlogs" class="single-blog" :key="blog.id">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | touppercase}}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import axios from '../axios-auth'
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    // this.$http.get("https://wd4780122795tsbgnr.wilddogio.com/posts.json")
    axios.get("/posts.json")
      .then(function(data) {
          return data.data;
      })
      .then((data)=>{
          var blogsArray = [];
          for(let key in data){
              data[key].id = key;
              blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
      })
  },
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(x => {
        return x.title.match(this.search);
      });
    }
  },
  filters: {
    //   "touppercase":function(value){
    //       return value.toUpperCase();
    //   }
    touppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type='text']{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
