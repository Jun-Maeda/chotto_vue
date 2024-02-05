<template>


  <div id="container">
<RouterView/>


    <footer>

      <ul id="footermenu">
        <li><a href="index.html">ホーム</a></li>
        <li><a href="contact.html">ご予約・お問合せ</a></li>
      </ul>

      <div class="copy">
        <small>Copyright&copy; <a href="index.html">東京北海旅館</a> All Rights Reserved.</small>
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
        <li><a href="greeting.html">お知らせ</a></li>
        <li><a href="room.html">イベント</a></li>
        <li><a href="dining.html">空室情報</a></li>
        <li><a href="service.html">客室・料金</a></li>
        <li><a href="contact.html">サービス内容</a></li>
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
<script>
export default {
  data: () => ({
    login: true,
    items: [
      { title: 'About', to: '/about', icon: 'mdi-clock' },
      { title: 'Form', to: '/form', icon: 'mdi-map-marker' },
      { title: 'Form Send', to: '/form_send', icon: 'mdi-map-marker' },
      { title: 'Form Validate', to: '/form_validate', icon: 'mdi-map-marker' },
      { title: 'tab', to: '/tab', icon: 'mdi-earth' },
      { title: 'ZipCode', to: '/zipcode', icon: 'mdi-spider-thread' },
      { title: 'HarryPotter', to: '/harry', icon: 'mdi-magic-staff' },
      { title: '入門', to: '/nyumon', icon: 'mdi-arrow-left-bold' },
      { title: 'Pinia', to: '/pinia', icon: 'mdi-image-filter-drama' },
      { title: 'Pinia2', to: '/pinia2', icon: 'mdi-image-filter-drama' },
      { title: 'Chart', to: '/chart', icon: 'mdi-image-filter-drama' }
    ],
    tables: [
      { title: 'Table', to: '/table', icon: 'mdi-phone-outgoing' },
      { title: 'Table2', to: '/table2', icon: 'mdi-alert-circle-outline' }
    ],
    pivtots: [
      { title: 'PiVToT Get', to: '/pivtot_get', icon: 'mdi-image-filter-hdr' },
      { title: 'PiVToT Post', to: '/pivtot_post', icon: 'mdi-thumb-up-outline' }
    ],
    drawer: false,
    links: [
      'Home',
      'About',
      'Contact'
    ]
  })
}
</script>