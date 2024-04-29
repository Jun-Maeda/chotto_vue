import { ref } from 'vue'
import { defineStore } from 'pinia'

export const apiSettingStore = defineStore(
  'api_setting',
  () => {
    const api_url = ref("https://misato.backend.hotel-chotto.com")
    const api_images = ref()

    // function resetEvent() {
    //     event_data.value = null
    // }

    return { api_url }
  },
  {
    persist: true,
  },
)