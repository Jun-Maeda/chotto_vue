<script setup>
import { infoDetailStore } from '@/stores/info_detail.js'
import { onMounted } from 'vue'
import { ref } from 'vue'
import router from '@/router/index.js'

let info_detail = ref({})
let info_detail_store = ref(infoDetailStore())
onMounted(() => {
  if (info_detail_store.value.info_data === null) {
      alert('エラー')
      // ホームへリダイレクト
      router.replace({
        name: 'home'
      })
    } else {
      info_detail.value = info_detail_store.value.info_data
    }
})

</script>

<template>
  <main>

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
        <v-col cols="12" sm="10">
          <h2> {{ info_detail.title }}</h2>
          <p>{{ info_detail.update_date }}</p>
        </v-col>
      </v-row>

    </section>


  </main>

</template>

