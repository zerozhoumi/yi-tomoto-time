<template>
  <div>
    <Input v-model="workThing" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="输入你想做的事，然后开始吧..."></Input>
    <label>多久完成？</label><InputNumber :max="60" :min="1" v-model="workDuration" ></InputNumber>
    <label>分几次？</label><InputNumber :max="5" :min="1" v-model="totalPomodoro" ></InputNumber>
    <Button type="success" v-on:click="sendText">开始吧！</Button>
    <div class="time">
    <tomato-time :total-pomodoro = "totalPomodoro"
            :workDuration=workDuration
            :diameter = "diameter">
  </tomato-time>
    </div>
  </div>
</template>

<script>
  import tomatoTime from '../components/Pomodoro.vue'
  import bus from '../bus'

  export default {
    data () {
      return {
        workThing: '',
        inputTime: 25,
        diameter: 300,
        totalPomodoro: 4,
        workDuration: 25
//        数据传递这再说
      }
    },
    methods: {
      sendText: function () {
        console.log(this.workThing)
        bus.$emit('some-event', '111111')
      }
    },
    components: {
      tomatoTime
    }
  }

</script>
<style scoped>
  .time{
    margin-left: 100px;
  }
</style>
