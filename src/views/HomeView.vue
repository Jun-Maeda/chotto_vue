<template>
  <header>

    <h1 id="logo"><a href="index.html"><img src="@/images/chotto_logo.png" alt="ちょっと"></a></h1>

    <nav>
      <ul>
        <li><a href="greeting.html">ご挨拶</a></li>
        <li><a href="room.html">お部屋のご紹介</a></li>
        <li><a href="dining.html">お料理について</a></li>
        <li><a href="service.html">施設・サービスのご案内</a></li>
        <li><a href="contact.html">ご予約・お問合せ</a></li>
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
          <dt>2023.00.00</dt>
          <dd>
            サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。
          </dd>
        </dl>

        <div class="r">
          <p class="animation-btn">
            <a href="#" class="animation-btn-inner">もっとみる<i class="bi bi-arrow-right"></i></a>
          </p>
        </div>

      </div>
      <!--/.new-->

    </section>

    <section class="blurstyle">

      <h2 class="dn">フォトギャラリー</h2>

      <div class="list-slide">

        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="(item,i) in slide_items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>

      </div>
      <!--/.list-slide-->

    </section>

    <section class="blurstyle">

      <h2>テンプレートのご利用前に必ずお読み下さい<span>Read me</span></h2>

      <h3 class="c">利用規約のご案内</h3>
      <p>このテンプレートは、<a href="https://template-party.com/">Template Party</a>にて無料配布している『旅館・料亭向け
        無料ホームページテンプレート tp_yado6』です。必ずダウンロード先のサイトの<a
          href="https://template-party.com/read.html">利用規約</a>をご一読の上でご利用下さい。</p>
      <p><strong class="color-check">HP最下部の著作表示『Web
        Design:Template-Party』は無断で削除しないで下さい。</strong><br>
        わざと見えなく加工する事も禁止です。</p>
      <p><strong class="color-check">下部の著作を外したい場合は</strong><br>
        <a href="https://template-party.com/">Template-Party</a>の<a href="https://template-party.com/member.html">ライセンス契約</a>を行う事でHP下部の著作を外す事ができます。
      </p>

      <h3 class="c">当テンプレートの詳しい使い方は</h3>
      <div class="c">
        <p class="animation-btn">
          <a href="about.html" class="animation-btn-inner">こちらをご覧下さい</a>
        </p>
      </div>

    </section>
  </main>


</template>

<script>
const url = 'https://hp-api.onrender.com/api/characters'
export default {
  data: () => ({
    search: '',
    headers: [
      {
        align: 'start',
        key: 'id',
        title: 'ID'
      },
      { key: 'name', align: 'end', title: '名前' },
      { key: 'gender', align: 'end', title: '性別' },
      { key: 'house', align: 'end', title: '寮' },
      { key: 'dateOfBirth', align: 'end', title: '誕生日' },
      { key: 'actor', align: 'end', title: '役者名' }
    ],
    slide_items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ]
  }),
  mounted() {
    this.axios.get(url).then((res) => {
      this.characters = res.data
    })
  },
  methods: {
    clickRow(item, row) {
      console.log('clickRow', row.item.actor)
    }
  }
}
</script>