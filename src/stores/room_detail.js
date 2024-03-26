import { ref } from 'vue'
import { defineStore } from 'pinia'

export const roomDetailStore = defineStore(
  'room_detail',
  () => {
    const room_data = ref(null)

    function resetRoom() {
        room_data.value = null
    }

    return { resetRoom, room_data }
  },
  {
    persist: true,
  },
)