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
    <small class="ma-3">全室標準でブロアーバスを完備。スキンケアやヘアケアにはDHCを使用しております。</small>
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
        <v-list lines="one" :items="default_service" bg-color="rgba(255,255,255,0.3)" base-color="white"
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
        class="ml-sm-auto">全室共通に加えてよりワンランク上のサービスを提供。贅沢なお時間をお過ごしいただけます。</small>
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
        <v-list lines="one" :items="vip_service" bg-color="rgba(255,255,255,0.3)" base-color="white"
        />
      </v-col>

    </v-row>


  </section>

  <section>


    <div class="list">
      <figure><img src="@/images/sample_service1.jpg" alt=""></figure>
      <div>
        <h4>タイトルを入れます</h4>
        <p>
          説明を入れます。サンプルテキスト。説明を入れます。サンプルテキスト。説明を入れます。サンプルテキスト。説明を入れます。サンプルテキスト。</p>
      </div>
    </div>

    <div class="list">
      <figure><img src="@/images/sample_service1.jpg" alt=""></figure>
      <div>
        <h4>タイトルを入れます</h4>
        <p>
          説明を入れます。サンプルテキスト。説明を入れます。サンプルテキスト。説明を入れます。サンプルテキスト。説明を入れます。サンプルテキスト。</p>
      </div>
    </div>

  </section>

  <section>

    <h2>タイトルを入れます</h2>

    <div class="c2">

      <div class="text text-l">
        <p>写真を大きく表示させたいならこのブロックを使います。サンプルテキスト。<br>
          写真を大きく表示させたいならこのブロックを使います。サンプルテキスト。</p>
        <p>写真を大きく表示させたいならこのブロックを使います。サンプルテキスト。<br>
          写真を大きく表示させたいならこのブロックを使います。サンプルテキスト。</p>
      </div>
      <!--/.text-->

      <div class="image image-r">
        <figure><img src="@/images/sample_service1.jpg" alt=""></figure>
      </div>
      <!--/.image-->

    </div>

  </section>

  <section>

    <h2>タイトルを入れます</h2>

    <div class="c2">

      <div class="text text-r">
        <p>写真を大きく表示させたいならこのブロックを使います。サンプルテキスト。<br>
          写真を大きく表示させたいならこのブロックを使います。サンプルテキスト。</p>
        <p>写真を大きく表示させたいならこのブロックを使います。サンプルテキスト。<br>
          写真を大きく表示させたいならこのブロックを使います。サンプルテキスト。</p>
      </div>
      <!--/.text-->

      <div class="image image-l">
        <figure><img src="@/images/sample_service1.jpg" alt=""></figure>
      </div>
      <!--/.image-->

    </div>

  </section>

  <section>

    <h2>シンプルな表示例</h2>
    <p class="c">シンプルな表示例です。サンプルテキスト。シンプルな表示例です。サンプルテキスト。</p>
    <figure><img src="@/images/sample_service1.jpg" alt=""></figure>
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
        title: '高級サロン仕様シャンプー'
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
    ]
  }),
  methods: {
    clickItem(item, row) {
      this.$router.push({
        name: 'info_detail'
      })
    }
  }
}
</script>