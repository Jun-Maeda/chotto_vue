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

// dayjsのインポート
import dayjs from 'dayjs'
// ロケールのインポート
import 'dayjs/locale/ja'

// ロケール設定
dayjs.locale('ja')


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
app.provide('dayjs', dayjs)
app.mount('#app')
