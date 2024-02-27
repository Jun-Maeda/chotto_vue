<script setup>
import { eventDetailStore } from '@/stores/event_detail.js'
import { onMounted } from 'vue'
import { ref } from 'vue'
import router from '@/router/index.js'

let event_detail = ref({})
let event_detail_store = ref(eventDetailStore())
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
  <main>

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
          <h2> {{ event_detail.title }}</h2>
          <p>{{ event_detail.update_date }}</p>
        </v-col>
      </v-row>

    </section>


  </main>

</template>

