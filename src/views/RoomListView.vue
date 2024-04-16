<script setup>
import { ref, onMounted, computed } from 'vue'
import { roomDetailStore } from '@/stores/room_detail.js'
import router from '@/router/index.js'
import axios from 'axios'
import { apiSettingStore } from '@/stores/api_setting.js'

const api_setting_store = apiSettingStore()
const url = api_setting_store.api_url
const room_url = url + '/api/v1/page/room/'

const tab = ref(1)
const types = ref([])

const room_list = computed(() => types.value.find((element) => element.id === tab.value).rooms)
function roomLink(id) {
  let room_store = roomDetailStore()
  room_store.room_data = id
  router.push({
    name: 'room'
  })

}

onMounted(async () => {
  await axios.get(room_url).then((res) => {
    types.value = res.data
  })

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
            <v-row class="mt-5">
              <v-col cols="12" sm="6" v-for="room in room_list" :key="room" class="list">
                <figure><a @click="roomLink(room.id)"><img :src="url + room.img" class="h-auto w-100" alt=""></a></figure>
                <div>
                  <h4><a @click="roomLink(room.id)">{{ room.name }}</a></h4>
                  <p>
                    <v-chip v-for="limited in room.limited" :key="limited" variant="outlined" class="mr-2 mb-2">
                      {{ limited.name }}
                    </v-chip>
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </section>

</template>

<style scoped>

</style>