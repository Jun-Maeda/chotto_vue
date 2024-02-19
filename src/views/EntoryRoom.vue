<template>
  <section>

    <div class="title-bg" id="greeting">
      <h2 class="mb0">
        <div class="tate">空室情報</div>
        <div class="yoko">EntoryRoom</div>
      </h2>
    </div>

  </section>

  <section>
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <iframe
          id="entory_room"
          title="entory_room"
          width="100%"
          height="600px"
          src="https://www.hotenavi.com/chotto02/empty">
        </iframe>
      </v-col>
    </v-row>

  </section>
</template>

<script>
export default {
  data: () => ({
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
      this.$router.push({
        name: 'info_detail'
      })
    }
  }
}
</script>