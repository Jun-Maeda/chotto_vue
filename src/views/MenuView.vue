<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { apiSettingStore } from '@/stores/api_setting.js'

const api_setting_store = apiSettingStore()
const url = api_setting_store.api_url
const menu_url = url + '/api/v1/page/menu/'
const get_data = ref({})
const menu = ref([])
const welcome = ref([])
const tab = ref(1)
const detail_header = ref([
  { title: '利用日', align: 'center', width: '50%', key: 'service_date' },
  { title: '利用時間', align: 'center', width: '50%', key: 'service_time' }
])
const price_header = ref([
    { title: '利用日', align: 'center', width: '50%', key: 'service_date' },
    { title: '価格', align: 'center', width: '50%', key: 'price' }
  ]
)

//
// function roomPage(id) {
//   // ここでpiniaに保存して部屋ページへ
//   console.log(id)
// }

const categories = computed(() => menu.value.find(get_category).categories)

function get_category(menus) {
  return menus.id === tab.value
}

onMounted(async() => {
  await axios.get(menu_url).then((res) => {
    get_data.value = res.data
  })


  menu.value = get_data.value.menu
  welcome.value = get_data.value.welcome

})
</script>

<template>


  <section>

    <div class="title-bg" id="greeting">
      <h2 class="mb0">
        <div class="tate">メニュー</div>
        <div class="yoko">Menu</div>
      </h2>
    </div>

  </section>

  <section>
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <v-tabs
          v-model="tab"
          align-tabs="center"
          color="purple-accent-1"
        >
          <v-tab v-for="type in menu" :key="type.id" :value="type.id"> {{ type.name }}</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item
            v-for="(type, key) in menu" :key="key"
            :value="type.id"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="12"
                >
                  <v-expansion-panels class="my-4" variant="popout">
                    <v-expansion-panel v-for="category in categories" :key="category.id"
                    >
                      <v-expansion-panel-title expand-icon="mdi-menu-down">
                        {{ category.name }}
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>

                        <v-data-iterator
                          :items="category.menus"
                        >
                          <template v-slot:default="{ items }">
                            <v-row>
                              <v-col
                                v-for="(item, i) in items"
                                :key="i"
                                cols="12"
                                sm="6"
                                xl="3"
                              >
                                <v-sheet border>
                                  <v-img
                                    v-if="item.raw.images[0]"
                                    :src="url+item.raw.images[0].image"
                                    height="250"
                                    cover
                                  ></v-img>
                                  <v-img
                                    v-if="!item.raw.images[0]"
                                    src="src/images/no_image.jpg"
                                    height="250"
                                    cover
                                  ></v-img>

                                  <v-list-item
                                    :title="item.raw.name"
                                    density="comfortable"
                                    lines="two"
                                  >
                                    <template v-slot:title>
                                      <strong class="text-h6">
                                        {{ item.raw.name }}
                                      </strong>
                                    </template>
                                  </v-list-item>

                                  <v-table class="text-caption" density="compact">
                                    <tbody>
                                    <tr align="right">
                                      <th>通常価格:</th>

                                      <td>{{ item.raw.price }}円</td>
                                    </tr>

                                    <tr align="right">
                                      <th>会員価格:</th>

                                      <td>{{ item.raw.member_price }}円</td>
                                    </tr>

                                    <tr align="right">
                                      <th>備考:</th>

                                      <td>{{ item.raw.text }}</td>
                                    </tr>
                                    </tbody>
                                  </v-table>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </template>
                        </v-data-iterator>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col v-if="tab==2" cols="12">
                  <v-card title="Welcomeドリンク" class="mt-5 mx-2" variant="outlined">
                    <template v-slot:text>
                      <v-chip class="ma-1" v-for="welcome in get_data.welcome" :key="welcome.id" :ripple="false"
                              variant="outlined">
                        {{ welcome.name }}
                      </v-chip>
                    </template>
                  </v-card>

                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
</style>