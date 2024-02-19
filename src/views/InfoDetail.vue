<script setup>
import { infoDetailStore } from '@/stores/info_detail.js'
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

<script>
export default {
  data: () => ({
    info_detail: {},
    // dialogDelete: false,
    info_detail_store: infoDetailStore(),
  }),
  mounted() {
    // this.info_detail = this.info_detail_store.info_data

    // ストアにデータが入っていなければ一覧にリダイレクト
    if (this.info_detail_store.info_data === null) {
      alert('エラー')
      // ホームへリダイレクト
      this.$router.replace({
        name: 'home',
      })
    } else {
      this.info_detail = this.info_detail_store.info_data
    }
  },
  methods: {},
}
</script>
