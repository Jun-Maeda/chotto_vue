import './assets/main.css'
import './assets/style.css'
import './assets/slide.css'
import './assets/animation.css'
import './assets/base.css'



import { createApp } from 'vue'
// import router from './router'
import router from '@/router/index.js'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify.js'

import App from './App.vue'


import { createPersistedState } from 'pinia-plugin-persistedstate'

const app = createApp(App)

// pinia
const pinia = createPinia()
pinia.use(createPersistedState())

app.config.productionTip = false
app.use(router)
app.use(VueAxios, axios)
app.use(vuetify)
app.use(pinia)
app.mount('#app')
