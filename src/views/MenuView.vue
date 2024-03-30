<script setup>
import { ref, onMounted, computed } from 'vue'

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

onMounted(() => {
  get_data.value = {
    "menu": [
        {
            "id": 1,
            "name": "FOOD",
            "categories": [
                {
                    "id": 4,
                    "name": "洋食",
                    "menus": [
                        {
                            "id": 3,
                            "name": "ローストチキンセット",
                            "price": 600,
                            "member_price": 480,
                            "welcome_flg": false,
                            "images": [],
                            "text": "バケットorライスのどちらかをお申し付けください"
                        },
                        {
                            "id": 4,
                            "name": "ビーフシチューセット",
                            "price": 1000,
                            "member_price": 800,
                            "welcome_flg": false,
                            "images": [],
                            "text": "バケットorライスのどちらかをお申し付けください"
                        },
                        {
                            "id": 5,
                            "name": "ハンバーグセット",
                            "price": 700,
                            "member_price": 560,
                            "welcome_flg": false,
                            "images": [],
                            "text": "バケットorライスのどちらかをお申し付けください"
                        },
                        {
                            "id": 6,
                            "name": "カレーライス",
                            "price": 500,
                            "member_price": 400,
                            "welcome_flg": false,
                            "images": [],
                            "text": "プラス¥50でエッグカレーにできます"
                        },
                        {
                            "id": 7,
                            "name": "ドライカレー",
                            "price": 500,
                            "member_price": 400,
                            "welcome_flg": false,
                            "images": [],
                            "text": "スープが付きます"
                        },
                        {
                            "id": 8,
                            "name": "オムライス",
                            "price": 700,
                            "member_price": 560,
                            "welcome_flg": false,
                            "images": [],
                            "text": "ケチャップorデミグラスソースお選びください\r\nスープ・サラダ付き"
                        },
                        {
                            "id": 9,
                            "name": "エビピラフ",
                            "price": 500,
                            "member_price": 400,
                            "welcome_flg": false,
                            "images": [],
                            "text": "スープ・サラダ付き"
                        },
                        {
                            "id": 10,
                            "name": "カルボナーラ",
                            "price": 600,
                            "member_price": 480,
                            "welcome_flg": false,
                            "images": [],
                            "text": "スープ・サラダ付き"
                        },
                        {
                            "id": 11,
                            "name": "ナポリタン",
                            "price": 600,
                            "member_price": 480,
                            "welcome_flg": false,
                            "images": [],
                            "text": "スープ・サラダ付き"
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "丼",
                    "menus": [
                        {
                            "id": 12,
                            "name": "牛丼",
                            "price": 600,
                            "member_price": 480,
                            "welcome_flg": false,
                            "images": [],
                            "text": "味噌汁付き"
                        },
                        {
                            "id": 13,
                            "name": "中華丼",
                            "price": 600,
                            "member_price": 480,
                            "welcome_flg": false,
                            "images": [],
                            "text": "味噌汁付き"
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "炒",
                    "menus": [
                        {
                            "id": 14,
                            "name": "チャーハン",
                            "price": 480,
                            "member_price": 380,
                            "welcome_flg": false,
                            "images": [],
                            "text": "スープ付き"
                        },
                        {
                            "id": 15,
                            "name": "焼きそば",
                            "price": 400,
                            "member_price": 320,
                            "welcome_flg": false,
                            "images": [],
                            "text": "スープ付き"
                        }
                    ]
                },
                {
                    "id": 8,
                    "name": "Side",
                    "menus": [
                        {
                            "id": 22,
                            "name": "フレンチトースト",
                            "price": 500,
                            "member_price": 400,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 23,
                            "name": "ガーリックトースト",
                            "price": 300,
                            "member_price": 240,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 24,
                            "name": "たこ焼き",
                            "price": 300,
                            "member_price": 240,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 25,
                            "name": "もつ煮込み",
                            "price": 500,
                            "member_price": 400,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 26,
                            "name": "枝豆",
                            "price": 300,
                            "member_price": 240,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        }
                    ]
                },
                {
                    "id": 9,
                    "name": "うどん",
                    "menus": [
                        {
                            "id": 16,
                            "name": "天ぷらうどん",
                            "price": 400,
                            "member_price": 320,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 17,
                            "name": "月見うどん",
                            "price": 400,
                            "member_price": 320,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "そば",
                    "menus": [
                        {
                            "id": 18,
                            "name": "天ぷらそば",
                            "price": 400,
                            "member_price": 320,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 19,
                            "name": "月見そば",
                            "price": 400,
                            "member_price": 320,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        }
                    ]
                },
                {
                    "id": 11,
                    "name": "ラーメン",
                    "menus": [
                        {
                            "id": 20,
                            "name": "しょうゆラーメン",
                            "price": 500,
                            "member_price": 400,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 21,
                            "name": "ちゃんぽん",
                            "price": 680,
                            "member_price": 540,
                            "welcome_flg": false,
                            "images": [],
                            "text": ""
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "DRINK",
            "categories": [
                {
                    "id": 1,
                    "name": "Beer ビール",
                    "menus": [
                        {
                            "id": 1,
                            "name": "アサヒ生ビール(中)",
                            "price": 400,
                            "member_price": 320,
                            "welcome_flg": false,
                            "images": [
                                {
                                    "id": 2,
                                    "image": "コーヒーぜりー.jpg"
                                }
                            ],
                            "text": null
                        },
                        {
                            "id": 2,
                            "name": "アサヒ生ビール(グラス)",
                            "price": 200,
                            "member_price": 160,
                            "welcome_flg": true,
                            "images": [],
                            "text": null
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Chu-Hi チューハイ",
                    "menus": [
                        {
                            "id": 27,
                            "name": "レモン酎ハイ",
                            "price": 380,
                            "member_price": 300,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 28,
                            "name": "ライム酎ハイ",
                            "price": 380,
                            "member_price": 300,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 29,
                            "name": "青りんご酎ハイ",
                            "price": 380,
                            "member_price": 300,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 30,
                            "name": "巨峰酎ハイ",
                            "price": 380,
                            "member_price": 300,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 31,
                            "name": "ウメ酎ハイ",
                            "price": 380,
                            "member_price": 300,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 32,
                            "name": "シークァーサー酎ハイ",
                            "price": 380,
                            "member_price": 300,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 33,
                            "name": "ゆず酎ハイ",
                            "price": 380,
                            "member_price": 300,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 34,
                            "name": "プレーン酎ハイ",
                            "price": 380,
                            "member_price": 300,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Soft Drink ソフトドリンク",
                    "menus": [
                        {
                            "id": 35,
                            "name": "アイスコーヒー",
                            "price": 180,
                            "member_price": 140,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 36,
                            "name": "ウーロン茶",
                            "price": 180,
                            "member_price": 140,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 37,
                            "name": "オレンジジュース",
                            "price": 180,
                            "member_price": 140,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        },
                        {
                            "id": 38,
                            "name": "ジンジャーエール",
                            "price": 180,
                            "member_price": 140,
                            "welcome_flg": true,
                            "images": [],
                            "text": ""
                        }
                    ]
                }
            ]
        }
    ],
    "welcome": [
        {
            "id": 2,
            "name": "アサヒ生ビール(グラス)",
            "price": 200,
            "member_price": 160,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 27,
            "name": "レモン酎ハイ",
            "price": 380,
            "member_price": 300,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 28,
            "name": "ライム酎ハイ",
            "price": 380,
            "member_price": 300,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 29,
            "name": "青りんご酎ハイ",
            "price": 380,
            "member_price": 300,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 30,
            "name": "巨峰酎ハイ",
            "price": 380,
            "member_price": 300,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 31,
            "name": "ウメ酎ハイ",
            "price": 380,
            "member_price": 300,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 32,
            "name": "シークァーサー酎ハイ",
            "price": 380,
            "member_price": 300,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 33,
            "name": "ゆず酎ハイ",
            "price": 380,
            "member_price": 300,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 34,
            "name": "プレーン酎ハイ",
            "price": 380,
            "member_price": 300,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 35,
            "name": "アイスコーヒー",
            "price": 180,
            "member_price": 140,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 36,
            "name": "ウーロン茶",
            "price": 180,
            "member_price": 140,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 37,
            "name": "オレンジジュース",
            "price": 180,
            "member_price": 140,
            "welcome_flg": true,
            "images": []
        },
        {
            "id": 38,
            "name": "ジンジャーエール",
            "price": 180,
            "member_price": 140,
            "welcome_flg": true,
            "images": []
        }
    ]
}

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
                                    :src="item.raw.images[0]"
                                    height="150"
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