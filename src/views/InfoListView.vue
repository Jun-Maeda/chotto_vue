<script setup>
import { infoDetailStore } from '@/stores/info_detail.js'
import { ref } from 'vue'
import router from '@/router/index.js'

let info_store = ref(infoDetailStore())
let headers = ref([
  { title: 'タイトル', align: 'start', width: '50%', key: 'title' },
  { title: '更新', align: 'end', width: '50%', key: 'update_date' }
])
let infos = ref([
  {
    update_date: '2023/12/25 12:17',
    title: 'お盆の料金について'
  },
  {
    update_date: '2023/12/26 12:17',
    title: 'お盆の料金について'
  },
  {
    update_date: '2023/12/24 12:17',
    title: 'お盆の料金について'
  }
])

function clickItem(item, row) {
      info_store.value.info_data = row.item
      router.push({
        name: 'info_detail'
      })
    }

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
          </v-data-table>
        </v-col>
      </v-row>

    </section>



</template>
<style>
/*v-data-tableの設定*/
.v-table {
    background-color: rgba(0,0,0,0.5) !important;
    color : white !important;
}
.v-data-table__tr:hover {
    background-color: rgba(255,255,255,0.5);
}
</style>

