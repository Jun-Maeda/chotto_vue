<script setup>
import { inject, onMounted, ref } from 'vue'
import birthday_1 from '@/images/birthday_1.jpg'
import birthday_2 from '@/images/birthday_2.jpg'
import xmas_1 from '@/images/xmas_1.jpg'
import xmas_2 from '@/images/xmas_2.jpg'
import xmas_3 from '@/images/xmas_3.jpg'
import surprise_foods_1 from '@/images/surprise_foods_1.jpg'
import surprise_foods_2 from '@/images/surprise_foods_2.jpg'
import surprise_foods_3 from '@/images/surprise_foods_3.jpg'



const activeSlide = ref(0)
const xmasActiveSlide = ref(0)
const foodActiveSlide = ref(0)

const birthdayImgs = ref([])
const xmasImgs = ref([])
const foodImgs = ref([])


onMounted(async () => {
  birthdayImgs.value = [
    birthday_1,
    birthday_2
  ]
  xmasImgs.value = [
    xmas_1,
    xmas_2,
    xmas_3
  ]
  foodImgs.value = [
    surprise_foods_1,
    surprise_foods_2,
    surprise_foods_3
  ]
})


</script>

<template>
  <section>

    <div class="title-bg" id="greeting">
      <h2 class="mb0">
        <div class="tate">サプライズ</div>
        <div class="yoko">Surprise</div>
      </h2>
    </div>

  </section>
  <section>
    <h2 class="ma-3">特別な日をもっと特別に</h2>
     <small class="ma-3">事前にお電話やご来店いただくことで<br></small>
    <small class="ma-3">ご予算に合わせてサプライズをご用意させていただきます。<br></small>
    <small class="ma-3">詳細につきましてはお問い合わせください。</small>
  </section>

  <section>
    <v-row>
      <v-col cols="12" sm="6" order-sm="1" class="mt-sm-10">
        <v-carousel
          v-model="activeSlide"
          height="auto"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="item in birthdayImgs"
            :src=item
          ></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="12" sm="6" order-sm="-1" class="mt-sm-10">
        <h3 class="text-right">誕生日や記念日に...</h3>
        <div>

        </div>
      </v-col>
    </v-row>
  </section>

  <section>
    <v-row>
      <v-col cols="12" sm="6" class="mt-sm-10">
        <v-carousel
          v-model="xmasActiveSlide"
          height="auto"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="item in xmasImgs"
            :src=item
          ></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="12" sm="6" order-sm="-1" class="mt-sm-10">
        <h3>クリスマスなどのイベントにも...</h3>
      </v-col>

    </v-row>
  </section>

  <section>
    <v-row>
      <v-col cols="12" sm="6" order-sm="1" class="mt-sm-10">
        <v-carousel
          v-model="foodActiveSlide"
          height="auto"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="item in foodImgs"
            :src=item
          ></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="12" sm="6" order-sm="-1" class="mt-sm-10">
        <h3 class="text-right">ケーキやお飲み物での演出も...</h3>
      </v-col>
    </v-row>
  </section>
  <p class="c"><a href="javascript:history.back()">&lt;&lt; 前のページに戻る</a></p>

</template>

