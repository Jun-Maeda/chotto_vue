import { ref } from 'vue'
import { defineStore } from 'pinia'

export const eventDetailStore = defineStore(
  'event_detail',
  () => {
    const event_data = ref(null)

    function resetEvent() {
        event_data.value = null
    }

    return { resetEvent, event_data }
  },
  {
    persist: true,
  },
)