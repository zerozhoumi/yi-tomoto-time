<template>
  <div>
  <inputCompent>

  </inputCompent>
  <Pomodoro :total-pomodoro = "totalPomodoro"
            :workDuration='state1'
            :diameter = "diameter">
  </Pomodoro>
  </div>
</template>

<script>
  import Pomodoro from '../components/Pomodoro.vue'
  import inputCompent from '../components/inputCompent.vue'
  export default {
    data () {
      return {
        diameter: 300,
        totalPomodoro: 3,
//        数据传递这再说
        workDuration: ''
      }
    },
    components: {
      Pomodoro,
      inputCompent
    }
  }
</script>
