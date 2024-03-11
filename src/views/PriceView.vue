<script setup>
import { ref, onMounted } from 'vue'

const types = ref([])
const tab = ref(1)
const price_tab = ref('detail')
const services = ref([])

onMounted(() => {
  types.value = [
    {
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
        }

      ]
    },
    {
      'id': 2,
      'name': 'VIP',
      'rooms': [
        {
          'id': 13,
          'name': '101'
        },
        {
          'id': 14,
          'name': '102'
        }
      ]
    }
  ]

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
            'serice_date': '全日',
            'service_time': '6:00～24:00',
            'priority': 0
          }
        ],
        'prices': [
          {
            'id': 3,
            'serice_date': '月～金・祝前日',
            'price': 5800,
            'priority': 0
          },
          {
            'id': 4,
            'serice_date': '土・日・祝日',
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
            'serice_date': '全日',
            'service_time': '6:00～17:00',
            'priority': 0
          }
        ],
        'prices': [
          {
            'id': 5,
            'serice_date': '月～金・祝前日',
            'price': 6300,
            'priority': 0
          },
          {
            'id': 6,
            'serice_date': '土・日・祝日',
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
            'serice_date': '全日',
            'service_time': '13:00～19:00',
            'priority': 0
          }
        ],
        'prices': [
          {
            'id': 8,
            'serice_date': '月～金・祝前日',
            'price': 6800,
            'priority': 0
          },
          {
            'id': 7,
            'serice_date': '土・日・祝日',
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
            'serice_date': '日～木・祝日',
            'service_time': '18:00～翌12:00',
            'priority': 0
          },
          {
            'id': 6,
            'serice_date': '金・土・祝前日',
            'service_time': '19:00～翌10:00',
            'priority': 1
          }
        ],
        'prices': [
          {
            'id': 9,
            'serice_date': '日～木・祝日',
            'price': 7800,
            'priority': 0
          },
          {
            'id': 10,
            'serice_date': '金・土・祝前日',
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
          color="red-lighten-1"
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
                <v-col
                >
                  {{ type.name }}
                  {{ services.name }}
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
                        <v-window v-model="price_tab">
                          <v-window-item value="detail">
                            <v-card flat>
                              <v-card-text>
                                時間
                              </v-card-text>
                            </v-card>
                          </v-window-item>
                          <v-window-item value="prices">
                            <v-card flat>
                              <v-card-text>
                                料金
                              </v-card-text>
                            </v-card>
                          </v-window-item>
                        </v-window>
                        </div>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
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