<script setup>
import { infoDetailStore } from '@/stores/info_detail.js'
import { inject, onMounted, ref } from 'vue'
import router from '@/router/index.js'
import { apiSettingStore } from '@/stores/api_setting.js'
import axios from 'axios'

const info_store = ref(infoDetailStore())
const headers = ref([
  { title: 'タイトル', align: 'start', width: '50%', key: 'title' },
  { title: '更新', align: 'end', width: '50%', key: 'update_date' }
])
const dayjs = inject('dayjs')
const api_setting_store = apiSettingStore()
const url = api_setting_store.api_url
const info_list_url = '/api/v1/page/info/'
const infos = ref([])

function clickItem(item, row) {
  info_store.value.info_data = row.item
  router.push({
    name: 'info_detail'
  })
}

onMounted(async () => {
  await axios.get(url + info_list_url).then((res) => {
    infos.value = res.data
  })
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
      <v-col cols="12" sm="10">
        <v-data-table :headers="headers" :items="infos" density="compact"
                      :sort-by="[{ key: 'update_date', order: 'desc' }]"
                      @click:row="clickItem" :footer-props="{ 'items-per-page-text' : '行/ページ:' }"
                      items-per-page-text="表示件数"
        >
          <template #headers />
          <template v-slot:[`item.update_date`]="{ item }">
            {{ dayjs(item.update_date).format('YYYY年M月DD日') }}
          </template>
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

