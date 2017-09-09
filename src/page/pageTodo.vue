<template>
  <div id="todo">
<todo-com>

</todo-com>
    <!--<button v-on:click="testOn">xx</button>-->
    <p>{{message}}</p>
  </div>
</template>

<script>
import todoCom from '../components/todoComponent.vue'
import bus from '../bus'

export default {
  data () {
    return {
      message: ''
//        数据传递这再说
    }
  },
  mounted () {
    var selfThis = this
    bus.$on('some-event', function (msg) {
      selfThis.message = msg
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
