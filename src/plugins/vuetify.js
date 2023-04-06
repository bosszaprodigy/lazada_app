import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { mdiAccount } from '@mdi/js'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
  themes: {
    dark: {
      background: '#e7e8ec'
    },
    // eslint-disable-next-line no-dupe-keys
    dark: true
  },
  mdiAccount,
  icons: {
    iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  }
}

export default new Vuetify(opts)
