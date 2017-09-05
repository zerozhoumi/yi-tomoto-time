<!--<template>-->
  <!--<div id="time">-->
    <!--<h1>番茄钟</h1>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->

<!--</script>-->
<!--<style>-->

<!--</style>-->


<template>
  <Pomodoro :total-pomodoro = "totalPomodoro"
            :work-duration = "25"
            :diameter = "diameter">
  </Pomodoro>
</template>

<script>
  import Pomodoro from 'vue-pomodoro'

  export default {
    data () {
      return {
        diameter: 300,
        totalPomodoro: 4
      }
    },

    components: {
      Pomodoro
    }
  }
</script>
