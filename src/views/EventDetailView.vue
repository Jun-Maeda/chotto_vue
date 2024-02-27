<script setup>
import { eventDetailStore } from '@/stores/event_detail.js'
import { onMounted } from 'vue'
import { ref } from 'vue'
import router from '@/router/index.js'

let event_detail = ref({})
let event_detail_store = ref(eventDetailStore())
let images = ref(['https://cdn.vuetifyjs.com/docs/images/graphics/gpus/1.png', 'https://cdn.vuetifyjs.com/docs/images/graphics/gpus/2.png','https://cdn.vuetifyjs.com/docs/images/graphics/gpus/3.png'])
let detail = ref('イベントがあるのでキテねイベントがあるのでキテねイベントがあるのでキテねイベントがあるのでキテねイベントがあるのでキテねイベントがあるのでキテね')
onMounted(() => {
  if (event_detail_store.value.event_data === null) {
      alert('エラー')
      // ホームへリダイレクト
      router.replace({
        name: 'home'
      })
    } else {
      event_detail.value = event_detail_store.value.event_data
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
        <v-col cols="12" sm="10">
          <h2 class="ma-3"> {{ event_detail.title }}</h2>
          <v-row justify="end">{{ event_detail.update_date }}</v-row>

          <div class="mt-5">{{ detail }}</div>
          <v-carousel
          cycle
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="(item,i) in images"
            :key="i"
            :src="item"
          ></v-carousel-item>
        </v-carousel>
        </v-col>
      </v-row>

    </section>



</template>

