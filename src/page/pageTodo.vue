<template>
  <div id="todo">
<todo-com>

</todo-com>

  </div>
</template>

<script>
import todoCom from '../components/todoComponent.vue'
import bus from '../assets/bus'

export default {
  data () {
    return {
    }
  },
  created () {
    bus.$on('workare', function (msg) {
      console.log(msg)
    })
  },
  components: {
    todoCom
  }
}
</script>
<style scoped>
  h1{
    background-color: #eee;
  }
</style>
