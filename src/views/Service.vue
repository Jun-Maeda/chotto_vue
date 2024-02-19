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
    infos: [
      {
        update_date: '2023/12/25 12:17',
        title: 'お盆の料金について'
      },
      {
        update_date: '2023/12/26 12:17',
        title: 'お盆の料金について'
      },
      {
        update_date: '2023/12/24 12:17',
        title: 'お盆の料金について'
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