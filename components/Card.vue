<template>
  <div class="column is-desktop is-4">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="post.cover" :alt="post.title">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">        
          <div class="media-content">
            <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug }}">
              <p class="title is-4">{{ post.title }}</p>
            </nuxt-link>
            
          </div>
        </div>
        <div class="content">
          {{ post.content }}
          <br>
          <a href="#">{{ post.tags.toLowerCase() }}</a>
          <br>
          <small><time :datetime="$moment(post.createdAt)">{{ $moment(post.createdAt).format('LL') }}</time></small>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import moment from 'moment'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
