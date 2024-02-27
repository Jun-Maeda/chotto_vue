<script setup>
// import { onMounted } from 'vue'
import { ref } from 'vue'
// import axios from 'axios'
import router from '@/router/index.js'

// const url = 'https://hp-api.onrender.com/api/characters'
// let search = ref('')
// let headers = ref([
//   {
//     align: 'start',
//     key: 'id',
//     title: 'ID'
//   },
//   { key: 'name', align: 'end', title: '名前' },
//   { key: 'gender', align: 'end', title: '性別' },
//   { key: 'house', align: 'end', title: '寮' },
//   { key: 'dateOfBirth', align: 'end', title: '誕生日' },
//   { key: 'actor', align: 'end', title: '役者名' }
// ])
let slide_items = ref([
  {
    id: 1,
    src: 'christmas.jpg'
  },
  {
    id: 2,
    src: 'joy_sound.jpg'
  },
  {
    id: 3,
    src: 'new_year.jpg'
  }
])
// onMounted(() => {
//   axios.get(url).then((res) => {
//     characters.value = res.data
//   })
// })
//
// function clickRow(item, row) {
//   console.log('clickRow', row.item.actor)
// }


</script>
<template>
  <header>

    <h1 id="logo"><a href="index.html"><img src="@/images/chotto_logo.png" alt="ちょっと"></a></h1>

    <nav>
      <ul>
        <li><a @click="router.push('info_list')">お知らせ</a></li>
        <li><a @click="router.push('event_list')">イベント</a></li>
        <li><a @click="router.push('entory_room')">空室情報</a></li>
        <li><a href="service.html">客室・料金</a></li>
        <li><a @click="router.push('services')">サービス内容</a></li>
        <li><a href="contact.html">メニュー</a></li>
        <li><a href="contact.html">メンバー特典</a></li>
        <li><a href="contact.html">アクセス</a></li>
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
          <dt>2023.07.14</dt>
          <dd>tp_yado6配布開始。</dd>
          <dt>2023.00.00</dt>
          <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
          <dt>2023.00.00</dt>
          <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
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

        <v-carousel

          height="auto"
          hide-delimiter-background
          show-arrows="hover"
        >
          <!--          この画像は今後djangoのAPIのURLのパスに変更とクリックしたらそのページに移動-->
          <v-carousel-item
            v-for="(item,i) in slide_items"
            :key="i"
            :src="`src/images/${item.src}`"
            @click="console.log(item.src)"
            max-height="700"
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
          <a href="about.html" class="animation-btn-inner">こちらをご覧下さい</a>
        </p>
      </div>

    </section>
  </main>


</template>

