<script setup>
import router from '@/router/index.js'

function clickMenu() {
  document.getElementById('menubar_hdr').click()
}





</script>
<template>


  <div id="container">
    <RouterView />


    <footer>

      <ul id="footermenu">
        <li><a href="index.html">ホーム</a></li>
        <li><a href="contact.html">ご予約・お問合せ</a></li>
      </ul>

      <div class="copy">
        <small>Copyright&copy; <a href="index.html">chotto</a> All Rights Reserved.</small>
        <span class="pr"><a href="https://template-party.com/" target="_blank">《Web Design:Template-Party》</a></span>
      </div>

    </footer>

  </div>
  <!--/#container-->

  <!--開閉ブロック-->
  <div id="menubar">

    <nav>
      <h2>【お問い合わせ】<br>0187-86-7001</h2>
      <!--      <h2>Contents</h2>-->
      <ul class="submenu">
        <li><a @click="router.push('/'); clickMenu()" class="cursor-pointer">ホーム</a></li>
        <li><a @click="router.push('info_list'); clickMenu()" class="cursor-pointer">お知らせ</a></li>
        <li><a @click="router.push('event_list'); clickMenu()" class="cursor-pointer">イベント</a></li>
        <li><a @click="router.push('entry_room'); clickMenu()" class="cursor-pointer">空室情報</a></li>
        <li><a href="service.html">客室・料金</a></li>
        <li><a @click="router.push('services'); clickMenu()">サービス内容</a></li>
        <li><a href="contact.html">メニュー</a></li>
        <li><a href="contact.html">メンバー特典</a></li>
        <li><a href="contact.html">アクセス</a></li>
      </ul>
    </nav>

    <ul class="icons">
      <li><a href=""><i class="bi bi-facebook"></i></a></li>
      <li><a href=""><i class="bi bi-twitter"></i></a></li>
      <li><a href=""><i class="bi bi-youtube"></i></a></li>
      <li><a href=""><i class="bi bi-instagram"></i></a></li>
    </ul>

  </div>
  <!--/#menubar-->

  <!--ページの上部へ戻るボタン-->
  <div class="pagetop"><a href="#"><i class="bi bi-arrow-up"></i></a></div>

  <!--開閉ボタン（ハンバーガーアイコン）-->
  <div id="menubar_hdr">
    <span></span><span></span>
  </div>


</template>
