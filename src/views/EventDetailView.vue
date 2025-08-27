<script setup>
import { eventDetailStore } from '@/stores/event_detail.js'
import { inject, onMounted } from 'vue'
import { ref } from 'vue'
import router from '@/router/index.js'
import { apiSettingStore } from '@/stores/api_setting.js'
import axios from 'axios'

const dayjs = inject('dayjs')
const api_setting_store = apiSettingStore()
const url = api_setting_store.api_url
const info_url = '/api/v1/page/info/'
const event_detail = ref({})
const event_detail_store = ref(eventDetailStore())
const carousel_is = ref(false)
const activeSlide = ref(0)
onMounted(async () => {
  if (event_detail_store.value.event_data === null) {
    alert('エラー')
    // ホームへリダイレクト
    router.replace({
      name: 'home'
    })
  } else {
    await axios.get(url + info_url + event_detail_store.value.event_data.id).then((res) => {
      event_detail.value = res.data
    })
    if (event_detail.value.images.length > 0) {
      carousel_is.value = true
    }
  }
})
</script>

<template>

  <section>

    <div class="title-bg" id="greeting">
      <h2 class="mb0">
        <div class="tate">イベント</div>
        <div class="yoko">Event</div>
      </h2>
    </div>

  </section>

  <section>
    <v-row justify="center">
      <v-col cols="12" sm="10" class="mb-5">
        <h2 class="ma-3"> {{ event_detail.title }}</h2>
        <v-row justify="end" class="mr-3">{{ dayjs(event_detail.update_date).format('YYYY年M月DD日') }}</v-row>
        <v-carousel
          v-model="activeSlide"
          v-show="carousel_is"
          cycle
          hide-delimiter-background
          show-arrows="hover"
          class="mt-5"
        >
          <v-carousel-item
            v-for="(item,i) in event_detail.images"
            :key="i"
            :src="url+item.img"
          ></v-carousel-item>
        </v-carousel>
        <div class="mt-5 mx-3" style="white-space: pre-wrap; word-wrap: break-word;">{{ event_detail.detail }}</div>

      </v-col>
    </v-row>
    <p class="c"><a href="javascript:history.back()">&lt;&lt; 前のページに戻る</a></p>

  </section>


</template>

