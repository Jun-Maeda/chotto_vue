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
          <h2> {{ event_detail.title }}</h2>
          <p>{{ event_detail.update_date }}</p>
        </v-col>
      </v-row>

    </section>


  </main>

</template>

<script>
import { eventDetailStore } from '@/stores/event_detail.js'

export default {
  data: () => ({
    event_detail: {},
    // dialogDelete: false,
    event_detail_store: eventDetailStore(),
  }),
  mounted() {
    // this.info_detail = this.info_detail_store.info_data

    // ストアにデータが入っていなければ一覧にリダイレクト
    if (this.event_detail_store.event_data === null) {
      alert('エラー')
      // ホームへリダイレクト
      this.$router.replace({
        name: 'home',
      })
    } else {
      this.event_detail = this.event_detail_store.event_data
    }
  },
  methods: {},
}
</script>
