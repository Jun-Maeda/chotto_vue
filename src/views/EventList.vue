<script setup>
import { eventDetailStore } from '@/stores/event_detail.js'
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


  </main>

</template>

<script>
export default {
  data: () => ({
    event_detail_store: eventDetailStore(),
    headers: [
      { title: 'タイトル', align: 'start', width: '50%', key: 'title' },
      { title: '更新', align: 'end', width: '50%', key: 'update_date' }
    ],
    infos: [
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
    ]
  }),
  methods: {
    clickItem(item, row) {
      this.event_detail_store.event_data = row.item
      this.$router.push({
        name: 'event_detail'
      })
    }
  }
}
</script>
