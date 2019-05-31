<template>
  <div class="column">
    <article class="tile is-child notification is-primary">
          <p class="title">{{ post.title }}</p>
          <p class="subtitle"><time :datetime="$moment(post.createdAt)">{{ $moment(post.createdAt).format('LL') }}</time></p>
    </article>
    <img :src="post.cover" width="100%" />
    {{ post.content }}
    <br>
    <a href="#">{{ post.tags }}</a>
  </div>  
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  head () {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.title }
      ]
    }
  },
  data () {
    return {
      post: null
    }
  },
  async asyncData ( { params, error }) {
    try {
      let response = await axios.get(`https://5ceede1b1c2baf00142cc459.mockapi.io/api/v1/posts?search=${ params.slug }`) 
      console.log(response)
      return {      
        post : response.data.data[0]
      }
    } catch (e) {
      error({
        statusCode: e.response.status,
        message: e.response.message
      })
    }    
  },
}
</script>

