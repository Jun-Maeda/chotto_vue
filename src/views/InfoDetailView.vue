<script setup>
import { infoDetailStore } from '@/stores/info_detail.js'
import { inject, onMounted } from 'vue'
import { ref } from 'vue'
import router from '@/router/index.js'
import { apiSettingStore } from '@/stores/api_setting.js'
import axios from 'axios'

const dayjs = inject('dayjs')
const info_detail = ref({})
const info_detail_store = ref(infoDetailStore())
const api_setting_store = apiSettingStore()
const url = api_setting_store.api_url
const info_url = '/api/v1/page/info/'
const carousel_is = ref(false)
const activeSlide = ref(0)
onMounted(async () => {
  if (info_detail_store.value.info_data === null) {
    alert('エラー')
    // ホームへリダイレクト
    router.replace({
      name: 'home'
    })
  } else {
    await axios.get(url + info_url + info_detail_store.value.info_data.id).then((res) => {
      info_detail.value = res.data
    })
    if (info_detail.value.images.length > 0){
      carousel_is.value = true
    }
  }
})

</script>

<template>


  <section>

    <div class="title-bg" id="greeting">
      <h2 class="mb0">
        <div class="tate">お知らせ</div>
        <div class="yoko">Informations</div>
      </h2>
    </div>

  </section>

  <section>
    <v-row justify="center">
      <v-col cols="12" sm="10" class="mb-5">
        <h2> {{ info_detail.title }}</h2>
        <v-row justify="end">{{ dayjs(info_detail.update_date).format('YYYY年M月DD日') }}</v-row>

        <div class="mt-5">{{ info_detail.detail }}</div>
        <v-carousel
          v-model="activeSlide"
          v-show="carousel_is"
          cycle
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="(item,i) in info_detail.images"
            :key="i"
            :src="url+item.img"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

  </section>


</template>

