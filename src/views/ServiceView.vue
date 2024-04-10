<script setup>
import { inject, onMounted, ref } from 'vue'
import { apiSettingStore } from '@/stores/api_setting.js'
import axios from 'axios'

const api_setting_store = apiSettingStore()
const url = api_setting_store.api_url
const facility_url = '/api/v1/page/facility/'
const normal = ref({})
const vip = ref({})
const limiteds = ref({})
const activeSlide = ref(0)
const vipActiveSlide = ref(0)

onMounted(async () => {
  await axios.get(url + facility_url).then((res) => {
    let result_data = res.data
    normal.value = result_data.normal
    vip.value = result_data.vip
    limiteds.value = result_data.limited_facilities
  })
})


function roomPage(id) {
  // ここでpiniaに保存して部屋ページへ
  console.log(id)
}

</script>

<template>
  <section>

    <div class="title-bg" id="greeting">
      <h2 class="mb0">
        <div class="tate">サービス・設備</div>
        <div class="yoko">Services & Facilities</div>
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
          v-model="activeSlide"
          cycle
          height="auto"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="(item,i) in normal.imgs"
            :key="i"
            :src="url+item"
          ></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="12" sm="6" order-sm="-1" class="mt-sm-10">
        <v-list lines="one" bg-color="rgba(255,255,255,0.1)" base-color="white"
        >
          <v-list-item
            v-for="normal in normal.facilities"
            :key="normal"
            :title="normal.name"
          />
        </v-list>
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
          v-model="vipActiveSlide"
          cycle
          height="auto"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="(item,i) in vip.imgs"
            :key="i"
            :src="url+item"
          ></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="12" sm="6" class="mt-sm-10">
        <v-list lines="one" bg-color="rgba(255,255,255,0.1)" base-color="white"
        >
          <v-list-item
            v-for="vip in vip.facilities"
            :key="vip"
            :title="vip.name"
          />
        </v-list>
        <v-card title="対象のお部屋" class="mt-5 mx-2" variant="outlined">
          <template v-slot:text>
            <v-chip class="ma-1" v-for="(vip_room, key) in vip.rooms" :key="key" :ripple="false" link variant="outlined"
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


    <div class="list" v-for="(limited, key) in limiteds" :key="key">
      <figure><img :src="url+limited.img" alt=""></figure>
      <div>
        <h4>{{ limited.name }}</h4>
        <p>
          <v-chip class="ma-1" v-for="(room, key) in limited.rooms" :key="key" :ripple="false" link variant="outlined"
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
      <figure><img src="@/images/rental_cos.jpg" alt=""></figure>
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
      <figure><img src="@/images/rental.jpg" alt=""></figure>
      <div>
        <h4>無料貸し出し</h4>
        <p>
          人気のシャンプー、コンディショナー、ボディソープ、充電ケーブル、ドライヤー、ヘアアイロンなど豊富な種類で御用意しております。</p>
      </div>
    </div>
    <div class="list">
      <figure><img src="@/images/keisyoku.jpg" alt=""></figure>
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

