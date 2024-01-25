<template>
  <v-row>
    <v-col cols="12">
      <v-card
        flat
        title="ハリーポッターキャラ一覧"
        style="width: 1000px"
      >
        <template v-slot:text>
          <v-text-field
            v-model="search"
            label="検索"
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
            class="v-col-sm-10 v-col-md-4 pa-0"
          ></v-text-field>
        </template>
      </v-card>
    </v-col>
    <v-col>

      <v-data-table
        :headers="headers"
        :items="characters"
        :search="search"
        fixed-header
        height="500px"
        @click:row="clickRow"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
const url = 'https://hp-api.onrender.com/api/characters'
export default {
  data: () => ({
    search: '',
    headers: [
      {
        align: 'start',
        key: 'id',
        title: 'ID'
      },
      { key: 'name', align: 'end', title: '名前' },
      { key: 'gender', align: 'end', title: '性別' },
      { key: 'house', align: 'end', title: '寮' },
      { key: 'dateOfBirth', align: 'end', title: '誕生日' },
      { key: 'actor', align: 'end', title: '役者名' }
    ],
    characters: []
  }),
  mounted() {
    this.axios.get(url).then((res) => {
      this.characters = res.data
    })
  },
  methods: {
    clickRow(item, row) {
      console.log('clickRow', row.item.actor)
    }
  }
}
</script>