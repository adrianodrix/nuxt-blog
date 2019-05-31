<template>
  <section class="section">     
    <div class="columns is-multiline">      
      <card v-for="post in posts" :key="post.id" :post="post"/>      
    </div>
    <small>I have {{ posts.length }} posts for you. </small>
    <a href="#" v-scroll-to="'body'">To top</a>
    <no-ssr>
      <v-select v-model="selected" aria-placeholder="Select Category" :options="['Vue.js','React']"></v-select>
    </no-ssr>    
  </section>
</template>

<script>
import Card from '~/components/Card'
import axios from 'axios'

export default {
  name: 'HomePage',
  data () {
    return {
      posts: [],
      selected: null,
    }
  },
  async asyncData() {
    let response = await axios.get('https://5ceede1b1c2baf00142cc459.mockapi.io/api/v1/posts') 
    return {      
      posts : response.data.data
    }
  },
  components: {
    Card
  }
}
</script>
