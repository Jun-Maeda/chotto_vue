<script setup>
import { ref, onMounted } from 'vue'
import { roomDetailStore } from '@/stores/room_detail.js'
import router from '@/router/index.js'

const tab = ref(1)
const types = ref([])
const room_list = ref([])

function roomLink(id) {
  let room_store = roomDetailStore()
  room_store.room_data = id
  router.push({
    name: 'room'
  })

}

onMounted(() => {
  types.value = [
    {
      'id': 1,
      'name': 'スタンダード',
      'rooms': [
        {
          'id': 1,
          'name': '103'
        },
        {
          'id': 2,
          'name': '105'
        },
        {
          'id': 3,
          'name': '106'
        }

      ]
    },
    {
      'id': 2,
      'name': 'VIP',
      'rooms': [
        {
          'id': 13,
          'name': '101'
        },
        {
          'id': 14,
          'name': '102'
        }
      ]
    }
  ]

  room_list.value = [
    {
      'id': 13,
      'name': '101',
      'img': '@/images/sample_room1.jpg',
      'limiteds': [{
        'id': 7,
        'name': 'ダイエットトレーナーコア'
      },
        {
          'id': 18,
          'name': '75インチ大型TV'
        }]
    },
    {
      'id': 14,
      'name': '102',
      'img': '@/images/sample_room1.jpg',
      'limiteds': [{
        'id': 7,
        'name': 'ダイエットトレーナーコア'
      },
        {
          'id': 18,
          'name': '75インチ大型TV'
        }]
    }
  ]
})
</script>

<template>
  <section>

    <div class="title-bg" id="greeting">
      <h2 class="mb0">
        <div class="tate">お部屋</div>
        <div class="yoko">Rooms</div>
      </h2>
    </div>

  </section>
  <section>
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <v-tabs
          v-model="tab"
          align-tabs="center"
          color="purple-accent-1"
        >
          <v-tab v-for="(type, key) in types" :key="key" :value="type.id"> {{ type.name }}</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item
            v-for="(type, key) in types" :key="key"
            :value="type.id"
          >
            <div v-for="room in room_list" :key="room" class="list">
              <figure><a @click="roomLink(room.id)"><img src="@/images/room_1.jpg" alt=""></a></figure>
              <div>
                <h4><a @click="roomLink(room.id)">{{ room.name }}</a></h4>
                <p>
                  <v-chip v-for="limited in room.limiteds" :key="limited" variant="outlined" class="mr-2 mb-2">
                    {{ limited.name }}
                  </v-chip>
                </p>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </section>
  <!--  <div class="list">-->
  <!--    <figure><a href="room2.html"><img src="@/images/sample_room1.jpg" alt=""></a></figure>-->
  <!--    <div>-->
  <!--      <h4><a href="room2.html">お部屋の名前を入れます</a></h4>-->
  <!--      <p>-->
  <!--        単純な説明テキストだけでいいならここを使います。サンプルテキスト。単純な説明テキストだけでいいならここを使います。サンプルテキスト。</p>-->
  <!--    </div>-->
  <!--  </div>-->


  <!--    <div class="list">-->
  <!--      <figure><a href="room2.html"><img src="@/images/sample_room1.jpg" alt=""></a></figure>-->
  <!--      <div>-->
  <!--        <h4><a href="room2.html">お部屋の名前を入れます</a></h4>-->
  <!--        <dl class="line">-->
  <!--          <dt>見出し</dt>-->
  <!--          <dd>サンプルテキスト。</dd>-->
  <!--          <dt>見出し</dt>-->
  <!--          <dd>サンプルテキスト</dd>-->
  <!--          <dt>見出し</dt>-->
  <!--          <dd>サンプルテキスト。</dd>-->
  <!--          <dt>見出し</dt>-->
  <!--          <dd>サンプルテキスト。</dd>-->
  <!--          <dt>見出し</dt>-->
  <!--          <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>-->
  <!--        </dl>-->
  <!--      </div>-->
  <!--    </div>-->

</template>

<style scoped>

</style>