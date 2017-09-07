<template>
  <div>
    <el-input
      type="textarea"
      autosize
      placeholder="输入你想做的事，然后开始吧">
    </el-input>
    <el-input v-model="inputTime" placeholder="输入时间"></el-input>
    <p>{{ inputTime }}</p>
  <Pomodoro :total-pomodoro = "totalPomodoro"
            :workDuration=workDuration
            :diameter = "diameter">
  </Pomodoro>
  </div>
</template>

<script>
  import Pomodoro from '../components/Pomodoro.vue'

  export default {
    data () {
      return {
        inputTime: '',
        diameter: 300,
        totalPomodoro: 3,
        workDuration: 30
//        数据传递这再说
      }
    },
    components: {
      Pomodoro
    },
    methods: function () {
      this.workDuration = this.inputTime
    }
  }
</script>
