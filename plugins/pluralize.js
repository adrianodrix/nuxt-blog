import Vue from 'vue'
import pluralize from 'pluralize'

const Pluralize = {
  install (Vue, options) {
    Vue.mixin({
      mehotds: {
        pluralize: pluralize
      }
    })
  }
}

Vue.use(Pluralize)