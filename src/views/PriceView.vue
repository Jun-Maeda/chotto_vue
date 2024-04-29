<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { apiSettingStore } from '@/stores/api_setting.js'
import axios from 'axios'
import { roomDetailStore } from '@/stores/room_detail.js'
import router from '@/router/index.js'

const types = ref([])
const tab = ref(1)
const price_tab = ref('detail')
const services = ref([])
const detail_header = ref([
  { title: '利用日', align: 'center', width: '50%', key: 'service_date' },
  { title: '利用時間', align: 'center', width: '50%', key: 'service_time' }
])
const price_header = ref([
    { title: '利用日', align: 'center', width: '50%', key: 'service_date' },
    { title: '価格', align: 'center', width: '50%', key: 'price' }
  ]
)

const api_setting_store = apiSettingStore()
const url = api_setting_store.api_url
const room_type_url = '/api/v1/page/room_type/'
async function getRoomDetail() {
  await axios.get(url + room_type_url + tab.value).then((res) => {
    services.value = res.data
  })
}

watch(tab, async () => {
  getRoomDetail()
})
function roomLink(id) {
  let room_store = roomDetailStore()
  room_store.room_data = id
  router.push({
    name: 'room'
  })

}


onMounted(async () => {
  await axios.get(url + room_type_url).then((res) => {
    types.value = res.data
    getRoomDetail()
  })
})


</script>

<template>
  <section>

    <div class="title-bg" id="greeting">
      <h2 class="mb0">
        <div class="tate">料金</div>
        <div class="yoko">Price</div>
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
          <v-tab v-for="(type, key) in types" :key="key" :value="type.id"> {{ type.name }}</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item
            v-for="(type, key) in types" :key="key"
            :value="type.id"
          >
            <v-container fluid>
              <v-row>
                <v-col cols="12"
                >
                  <v-expansion-panels class="my-4" variant="popout">
                    <v-expansion-panel v-for="s in services.services" :key="s"
                    >
                      <v-expansion-panel-title expand-icon="mdi-menu-down">
                        {{ s.name }}
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <div class="d-flex flex-row">
                          <v-tabs
                            v-model="price_tab"
                            color="primary"
                            direction="vertical"
                          >
                            <v-tab value="detail">
                              時間
                            </v-tab>
                            <v-tab value="prices">
                              料金
                            </v-tab>
                          </v-tabs>
                          <v-window v-model="price_tab" style="width: 80%" class="pa-0 pa-sm-5">
                            <v-window-item value="detail">
                              <v-data-table-virtual :headers="detail_header" :items="s.detail" density="compact"
                                                    :sort-by="[{ key: 'priority', order: 'asc' }]"
                                                    color="blue-grey-lighten-5"
                              >
                                <template #headers />
                              </v-data-table-virtual>

                            </v-window-item>
                            <v-window-item value="prices">
                              <v-data-table-virtual :headers="price_header" :items="s.prices" density="compact"
                                                    :sort-by="[{ key: 'priority', order: 'asc' }]"
                                                    color="blue-grey-lighten-5"
                              >
                                <template #headers />
                                <template v-slot:item.price="{ item }">
                                  {{ item.price.toLocaleString() }}円(税込)
                                </template>
                              </v-data-table-virtual>
                            </v-window-item>
                          </v-window>
                        </div>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col cols="12">
<!--                  <v-list lines="one" :items="vip_service" bg-color="rgba(255,255,255,0.1)" base-color="white"-->
<!--                  />-->
                  <v-card title="対象のお部屋" class="mt-5 mx-2" variant="outlined">
                    <template v-slot:text>
                      <v-chip class="ma-1" v-for="(room, key) in services.rooms" :key="key" :ripple="false" link
                              variant="outlined"
                              @click="roomLink(room.id)">
                        {{ room.name }}
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