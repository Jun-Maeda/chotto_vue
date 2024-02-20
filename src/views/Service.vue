<script setup>

</script>

<template>
  <section>

    <div class="title-bg" id="greeting">
      <h2 class="mb0">
        <div class="tate">サービス内容</div>
        <div class="yoko">Services</div>
      </h2>
    </div>

  </section>

  <section>

    <h2 class="ma-3">全室完備</h2>
    <small class="ma-3">全室標準でブロアーバスを完備。<br></small>
    <small class="ma-3">スキンケアやヘアケアにはDHCを使用しております。</small>
    <v-row>
      <v-col cols="12" sm="6" order-sm="1" class="mt-sm-10">
        <v-carousel
          cycle
          height="auto"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="(item,i) in default_slide_items"
            :key="i"
            :src="`src/images/${item.src}`"
          ></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="12" sm="6" order-sm="-1" class="mt-sm-10">
        <v-list lines="one" :items="default_service" bg-color="rgba(255,255,255,0.1)" base-color="white"
        />
      </v-col>

    </v-row>


  </section>

  <section>

    <v-row style="margin:0" class="ma-3">
      <h2 class="ml-sm-auto">VIPルーム限定</h2>
    </v-row>
    <v-row style="margin:0" class="ma-3">
      <small
        class="ml-sm-auto">VIPだけのサービス。ちょっと贅沢な時間を過ごしたい方に。</small>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" class="mt-sm-10">
        <v-carousel
          cycle
          height="auto"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="(item,i) in vip_slide_items"
            :key="i"
            :src="`src/images/${item.src}`"
          ></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="12" sm="6" class="mt-sm-10">
        <v-list lines="one" :items="vip_service" bg-color="rgba(255,255,255,0.1)" base-color="white"
        />
        <v-card title="対象のお部屋" class="mt-5 mx-2" variant="outlined">
          <template v-slot:text>
            <v-chip class="ma-1" v-for="(vip_room, key) in vip_rooms" key="key" :ripple="false" link variant="outlined"
                    @click="roomPage(vip_room.id)">
              {{ vip_room.name }}
            </v-chip>
          </template>
        </v-card>

      </v-col>

    </v-row>


  </section>

  <section>
    <h2 class="ma-3">限定設備</h2>
    <small
      class="ma-3">一部のお部屋限定の設備です。</small>
    <!--    <div class="list">-->
    <!--      <figure><img src="@/images/sample_service1.jpg" alt=""></figure>-->
    <!--      <div>-->
    <!--        <h4>タイトルを入れます</h4>-->
    <!--        <p>-->
    <!--          説明を入れます。サンプルテキスト。説明を入れます。サンプルテキスト。説明を入れます。サンプルテキスト。説明を入れます。サンプルテキスト。</p>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="list" v-for="(limited, key) in limiteds" :key="key">
      <figure><img :src="`src/images/${limited.img}`" alt=""></figure>
      <div>
        <h4>{{ limited.name }}</h4>
        <p>
          <v-chip class="ma-1" v-for="(room, key) in limited.rooms" key="key" :ripple="false" link variant="outlined"
                  @click="roomPage(room.id)">
            {{ room.name }}
          </v-chip>
        </p>
      </div>
    </div>

  </section>

  <section>
    <h2 class="ma-3">その他サービス</h2>
    <small
      class="ma-3">ご希望によってご利用いただけるサービスです。</small>
    <div class="list">
      <figure><img src="@/images/sample_service1.jpg" alt=""></figure>
      <div>
        <h4>コスチュームレンタル</h4>
        <p>通常レンタル料1着800円・メンバー様1着500円で御利用頂けます。</p>
        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text="注意事項"></v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="注意事項">
              <v-card-text>
                メンバー様は、オーダー前に必ずメンバーズカードを両替機に挿入してください。
                <br>挿入されませんとメンバー様扱いにはなりませんのでご注意ください。
                <br><br>コスチューム種類は10種類(スチュワーデス、ホワイトナースなど)
                <br>サイズはすべてB73～88・W55～66・H87～93となっております。
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="閉じる"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </div>
    <div class="list">
      <figure><img src="@/images/sample_service1.jpg" alt=""></figure>
      <div>
        <h4>インバスアイテム無料貸し出し</h4>
        <p>人気のシャンプー、コンディショナー、ボディソープを豊富な種類で御用意しております。</p>
      </div>
    </div>
    <div class="list">
      <figure><img src="@/images/sample_service1.jpg" alt=""></figure>
      <div>
        <h4>お食事・軽食</h4>
        <p>
          お食事から、ちょっとしたおつまみをご用意しております。ご気分に合わせてお好きなメニューをお楽しみくださいませ。</p>
        <v-row justify="end" style="max-width: 700px">
          <v-btn density="compact" variant="text">お食事詳細→</v-btn>
        </v-row>

      </div>
    </div>


  </section>

</template>

<script>
export default {
  data: () => ({
    headers: [
      { title: 'タイトル', align: 'start', width: '50%', key: 'title' },
      { title: '更新', align: 'end', width: '50%', key: 'update_date' }
    ],
    default_service: [
      {
        title: 'VOD'
      },
      {
        title: 'ブルーレイ'
      },
      {
        title: 'ブロアーバス'
      },
      {
        title: '浴室TV'
      },
      {
        title: '水中照明'
      },
      {
        title: 'ドライヤー'
      },
      {
        title: 'ファブリックスプレー'
      },
      {
        title: 'スキンケア'
      },
      {
        title: 'シャンプー・コンディショナー'
      }
    ],
    default_slide_items: [
      {
        id: 1,
        src: 'sample_service1.jpg'
      },
      {
        id: 2,
        src: 'sample_service1.jpg'
      },
      {
        id: 3,
        src: 'sample_service1.jpg'
      }
    ],
    vip_service: [
      {
        title: '高級サロン仕様のインバスアイテム'
      },
      {
        title: '大風量ドライヤー'
      },
      {
        title: 'ウォーターサーバー'
      },
      {
        title: '加湿機能付き空気清浄機'
      }
    ],
    vip_slide_items: [
      {
        id: 1,
        src: 'sample_service1.jpg'
      },
      {
        id: 2,
        src: 'sample_service1.jpg'
      },
      {
        id: 3,
        src: 'sample_service1.jpg'
      }
    ],
    vip_rooms: [
      {
        'id': 13,
        'name': '101'
      },
      {
        'id': 14,
        'name': '102'
      },
      {
        'id': 15,
        'name': '112'
      },
      {
        'id': 16,
        'name': '113'
      }
    ],
    limiteds: [
      {
        'id': 1,
        'name': 'カラオケ',
        'img': 'sample_service1.jpg',
        'rooms': [
          {
            'id': 14,
            'name': '102'
          },
          {
            'id': 15,
            'name': '112'
          }
        ]
      },
      {
        'id': 2,
        'name': '100インチプロジェクター',
        'img': 'sample_service1.jpg',
        'rooms': [
          {
            'id': 14,
            'name': '102'
          },
          {
            'id': 15,
            'name': '112'
          }
        ]
      },
      {
        'id': 3,
        'name': 'ダイエットトレーナーコア',
        'img': 'sample_service1.jpg',
        'rooms': [
          {
            'id': 14,
            'name': '102'
          },
          {
            'id': 15,
            'name': '112'
          }
        ]
      }
    ]

  }),
  methods: {
    clickItem(item, row) {
      this.$router.push({
        name: 'info_detail'
      })
    },
    roomPage(id) {
      // ここでpiniaに保存して部屋ページへ
      console.log(id)
    }
  }
}
</script>