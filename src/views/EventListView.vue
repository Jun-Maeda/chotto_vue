<script setup>
import { eventDetailStore } from '@/stores/event_detail.js'
import { inject, onMounted, ref } from 'vue'
import router from '@/router/index.js'
import axios from 'axios'
import { apiSettingStore } from '@/stores/api_setting.js'

const dayjs = inject('dayjs')
const api_setting_store = apiSettingStore()
const url = api_setting_store.api_url
const event_list_url = '/api/v1/page/event/'

const event_store = ref(eventDetailStore())
const headers = ref([
  { title: '画像', align: 'start', width: '20%', key: 'images' },
  { title: 'タイトル', align: 'start', width: '50%', key: 'title' },
  { title: '更新', align: 'end', width: '50%', key: 'update_date' }
])
const events = ref([])

function checkImg(images){
  if(images.length > 0){
    return true
  }else{
    return false
  }
}

onMounted(async () => {
  await axios.get(url + event_list_url).then((res) => {
    events.value = res.data
  })
})

function clickItem(item, row) {
  event_store.value.event_data = row.item
  console.log(item)
  router.push({
    name: 'event_detail'
  })
}

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
        <v-data-table :headers="headers" :items="events" density="compact"
                      :sort-by="[{ key: 'update_date', order: 'desc' }]"
                      @click:row="clickItem" :footer-props="{ 'items-per-page-text' : '行/ページ:' }"
                      items-per-page-text="表示件数"
        >
          <template v-slot:[`item.update_date`]="{ item }">
            {{ dayjs(item.update_date).format('YYYY年M月DD日') }}
          </template>
          <template v-slot:[`item.images`]="{ item }">
            <v-card class="my-2" elevation="2" rounded>
              <v-img
                v-if="checkImg(item.images)"
                :src="url+item.images[0].img"
                height="100"
                cover
              ></v-img>
              <v-img
                v-if="checkImg(item.images) === false"
                src="src/images/no_image.jpg"
                height="100"
                cover
              ></v-img>
            </v-card>
          </template>

          <template #headers />
        </v-data-table>
      </v-col>
    </v-row>

  </section>


</template>
<style>
/*v-data-tableの設定*/
.v-table {
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: white !important;
}

.v-data-table__tr:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>

