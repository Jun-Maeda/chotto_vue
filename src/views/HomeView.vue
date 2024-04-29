<script setup>
import { inject, onMounted, ref } from 'vue'
import axios from 'axios'
import router from '@/router/index.js'
import { apiSettingStore } from '@/stores/api_setting.js'
import { infoDetailStore } from '@/stores/info_detail.js'
import { eventDetailStore } from '@/stores/event_detail.js'
// injectからdayjsを呼び出す
const dayjs = inject('dayjs')
const event_store = ref(eventDetailStore())

const api_setting_store = apiSettingStore()
const url = api_setting_store.api_url
const home_url = url + '/api/v1/page/home/'
const home_infos = ref({})
const home_events = ref({})
const activeSlide = ref(0)

const slide_items = ref([])
const info_store = ref(infoDetailStore())

onMounted(async () => {
  await axios.get(home_url).then((res) => {
    home_infos.value = res.data.infos
    home_events.value = res.data.events
  })
  for (let i = 0; i < home_events.value.length; i++) {
    let data = {
      'id': home_events.value[i].id,
      'image': home_events.value[i].images[0]
    }
    slide_items.value.push(data)
  }
})

function clickInfo(item) {
  info_store.value.info_data = item
  router.push({
    name: 'info_detail'
  })
}

function clickEvent(item) {
  event_store.value.event_data = item
  router.push({
    name: 'event_detail'
  })
}

function event_urls(images) {
  return url + images[0].img
}


</script>
<template>
  <header>

    <h1 id="logo"><img src="@/images/chotto_logo.png" alt="ちょっと"></h1>

    <nav>
      <ul>
        <li><a @click="router.push('info_list')">お知らせ</a></li>
        <li><a @click="router.push('event_list')">イベント</a></li>
        <li><a @click="router.push('entry_room')">空室情報</a></li>
        <li><a @click="router.push('room_list')">お部屋</a></li>
        <li><a @click="router.push('price')">料金</a></li>
        <li><a @click="router.push('services')">サービス・設備</a></li>
        <li><a @click="router.push('menu')">メニュー</a></li>
        <li><a @click="router.push('member')">メンバー特典</a></li>
        <li><a @click="router.push('access')">アクセス</a></li>
      </ul>
    </nav>

    <!--スライドショー-->
    <div class="slide1">slide1</div>
    <div class="slide2">slide2</div>
    <div class="slide3">slide3</div>

  </header>

  <!--  <ul class="lang-menu">-->
  <!--    <li><a href="index_en.html">English</a></li>-->
  <!--  </ul>-->

  <main>

    <section class="blurstyle">

      <div class="title-bg">
        <h2>
          <div class="tate">お知らせ</div>
          <div class="yoko">News</div>
        </h2>
      </div>

      <div class="new">

        <dl>
          <template v-for="(item,key) in home_infos" :key="key">
            <dt @click="clickInfo(item)" class="cursor-pointer">{{ dayjs(item.update_date).format('YYYY年M月DD日') }}
            </dt>
            <dd @click="clickInfo(item)" class="pl-5 cursor-pointer">{{ item.title }}。</dd>
          </template>
        </dl>

        <div class="r">
          <p class="animation-btn">
            <a @click="router.push('info_list')" class="animation-btn-inner">もっとみる<i
              class="bi bi-arrow-right"></i></a>
          </p>
        </div>

      </div>
      <!--/.new-->

    </section>


    <section class="blurstyle">

      <div class="title-bg">
        <h2>
          <div class="tate">イベント</div>
          <div class="yoko">Event</div>
        </h2>
      </div>
      <div class="list-slide mb-3">

        <v-carousel v-model="activeSlide"
        >
          <v-carousel-item
            v-for="(item,i) in slide_items"
            :key="i"
            :src="url+item.image.img"
            @click="clickEvent(item)"
            max-height="700"
            eager
          ></v-carousel-item>
        </v-carousel>

      </div>

      <div class="r">
        <p class="animation-btn">
          <a @click="router.push('event_list')" class="animation-btn-inner">もっとみる<i
            class="bi bi-arrow-right"></i></a>
        </p>
      </div>

    </section>

    <section class="blurstyle">

      <h2>アクセス<span>Access</span></h2>

      <!--      <h3 class="c">利用規約のご案内</h3>-->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12328.409729188774!2d140.5305002!3d39.4218081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8f0a24c8ae4ad9%3A0x84d3635426970a49!2z44Gh44KH44Gj44Go576O6YO3!5e0!3m2!1sja!2sjp!4v1707113442549!5m2!1sja!2sjp"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div class="c mt-3">
        <p class="animation-btn">
          <a @click="router.push('/access')" class="animation-btn-inner">詳細はこちら</a>
        </p>
      </div>


    </section>
  </main>


</template>

