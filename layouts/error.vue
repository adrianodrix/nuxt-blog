<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">{{ error.statusCode }}  <b-icon
      icon="alert-circle-outline"
      size="is-large"
    /></h2>
    <h3 class="subtitle is-6">{{ error.message }}</h3>
    <h3 class="subtitle is-6 has-text-grey">
      <nuxt-link to="/">Voltar</nuxt-link>      
    </h3>
  </section>
</template>

<script>
export default {
  props: [
    'error'
  ]
}
</script>