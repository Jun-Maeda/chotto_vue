<script setup>
import { roomDetailStore } from '@/stores/room_detail.js'
import { onMounted, onBeforeMount } from 'vue'
import { ref } from 'vue'

let room_detail = ref({})
const room_detail_store = ref(roomDetailStore())
let images = ref(['./src/images/room_1.jpg', './src/images/room_2.jpg', './src/images/bath.jpg'])
const price_tab = ref('detail')
const detail_header = ref([
  { title: '利用日', align: 'center', width: '50%', key: 'service_date' },
  { title: '利用時間', align: 'center', width: '50%', key: 'service_time' }
])
const price_header = ref([
    { title: '利用日', align: 'center', width: '50%', key: 'service_date' },
    { title: '価格', align: 'center', width: '50%', key: 'price' }
  ]
)
const services = ref([])

onBeforeMount(() => {
  // if (room_detail_store.value.room_data === null) {
  //     alert('エラー')
  //     // ホームへリダイレクト
  //     router.replace({
  //       name: 'home'
  //     })
  //   } else {
  //     room_detail.value = room_detail_store.value.room_data
  //   }
  console.log('ok')
  room_detail.value = {
    'id': 13,
    'name': '101',
    'type': {
      'id': 2,
      'name': 'VIP'
    },
    'images': [],
    'facilities': {
      'limited': [
        {
          'id': 7,
          'name': 'ダイエットトレーナーコア'
        },
        {
          'id': 18,
          'name': '75インチ大型TV'
        }
      ],
      'vip': [
        {
          'id': 1,
          'name': '高級サロン仕様のインバスアイテム'
        },
        {
          'id': 2,
          'name': '大風量ドライヤー'
        },
        {
          'id': 3,
          'name': 'ウォーターサーバー'
        },
        {
          'id': 4,
          'name': '加湿機能付き空気清浄機'
        }
      ],
      'normal': [
        {
          'id': 8,
          'name': 'VOD'
        },
        {
          'id': 9,
          'name': 'ブルーレイ'
        },
        {
          'id': 10,
          'name': 'ブロアーバス'
        },
        {
          'id': 12,
          'name': '浴室TV'
        },
        {
          'id': 13,
          'name': 'ドライヤー'
        },
        {
          'id': 14,
          'name': 'ファブリックスプレー'
        },
        {
          'id': 15,
          'name': 'スキンケア'
        },
        {
          'id': 16,
          'name': 'シャンプー・コンディショナー'
        }
      ]
    }
  }

  services.value = {
    'id': 1,
    'name': 'スタンダード',
    'rooms': [
      {
        'id': 1,
        'name': '103'
      },
      {
        'id': 2,
        'name': '105'
      },
      {
        'id': 3,
        'name': '106'
      },
      {
        'id': 4,
        'name': '107'
      },
      {
        'id': 5,
        'name': '108'
      }

    ],
    'services': [
      {
        'id': 3,
        'name': '休憩（3H）',
        'detail': [
          {
            'id': 3,
            'service_date': '全日',
            'service_time': '6:00～24:00',
            'priority': 0
          }
        ],
        'prices': [
          {
            'id': 3,
            'service_date': '月～金・祝前日',
            'price': 5800,
            'priority': 0
          },
          {
            'id': 4,
            'service_date': '土・日・祝日',
            'price': 6300,
            'priority': 1
          }
        ]
      },
      {
        'id': 4,
        'name': 'フリータイム1',
        'detail': [
          {
            'id': 4,
            'service_date': '全日',
            'service_time': '6:00～17:00',
            'priority': 0
          }
        ],
        'prices': [
          {
            'id': 5,
            'service_date': '月～金・祝前日',
            'price': 6300,
            'priority': 0
          },
          {
            'id': 6,
            'service_date': '土・日・祝日',
            'price': 6800,
            'priority': 1
          }
        ]
      },
      {
        'id': 5,
        'name': 'フリータイム2',
        'detail': [
          {
            'id': 5,
            'service_date': '全日',
            'service_time': '13:00～19:00',
            'priority': 0
          }
        ],
        'prices': [
          {
            'id': 8,
            'service_date': '月～金・祝前日',
            'price': 6800,
            'priority': 0
          },
          {
            'id': 7,
            'service_date': '土・日・祝日',
            'price': 7300,
            'priority': 1
          }
        ]
      },
      {
        'id': 1,
        'name': 'ご宿泊',
        'detail': [
          {
            'id': 1,
            'service_date': '日～木・祝日',
            'service_time': '18:00～翌12:00',
            'priority': 0
          },
          {
            'id': 6,
            'service_date': '金・土・祝前日',
            'service_time': '19:00～翌10:00',
            'priority': 1
          }
        ],
        'prices': [
          {
            'id': 9,
            'service_date': '日～木・祝日',
            'price': 7800,
            'priority': 0
          },
          {
            'id': 10,
            'service_date': '金・土・祝前日',
            'price': 8400,
            'priority': 1
          }
        ]
      }
    ]
  }
})

</script>

<template>
  <section>

    <div class="title-bg" id="greeting">
      <h2 class="mb0">
        <div class="tate">お部屋</div>
        <div class="yoko">Room</div>
      </h2>
    </div>

  </section>
  <section class="mt-5">
    <table class="ta1">
      <caption>
        <h2>{{ room_detail.name }}</h2>
        <p>〜{{ room_detail.type.name }}〜</p>
      </caption>
    </table>
  </section>
  <section>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-carousel
          hide-delimiter-background
          show-arrows="hover"
          height="auto"
          class="mt-0 pt-0"
        >
          <v-carousel-item
            v-for="(item,i) in images"
            :key="i"
            :src="item"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="11" sm="9" class="mt-5">
        <table class="ta1">
          <tr v-if="room_detail.facilities.limited.length > 0">
            <th class="px-3">限定</th>
            <td class="px-3">
              <v-chip v-for="limited in room_detail.facilities.limited" :key="limited" variant="outlined"
                      class="mr-2 mb-2">
                {{ limited.name }}
              </v-chip>
            </td>
          </tr>
          <tr v-if="room_detail.type.id == '2'">
            <th class="px-3">VIP</th>
            <td class="px-3">
              <v-chip v-for="vip in room_detail.facilities.vip" :key="vip" variant="outlined" class="mr-2 mb-2">
                {{ vip.name }}
              </v-chip>
            </td>
          </tr>
          <tr>
            <th class="px-3">設備</th>
            <td class="px-3">
              <v-chip v-for="normal in room_detail.facilities.normal" :key="normal" variant="outlined"
                      class="mr-2 mb-2">
                {{ normal.name }}
              </v-chip>
            </td>
          </tr>
        </table>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10">
        <v-container fluid>

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
                      <v-window v-model="price_tab" style="width: 80%" class="pa-0">
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
        </v-container>
        <p class="c"><a href="javascript:history.back()">&lt;&lt; 前のページに戻る</a></p>
      </v-col>
    </v-row>
  </section>


</template>

