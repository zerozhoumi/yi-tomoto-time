<template>
  <div>
  <el-input
    type="textarea"
    autosize
    placeholder="输入你想做的事，然后开始吧">
  </el-input>
  <el-row>
    <el-col :span="12">
      <div class="sub-title">你想多久完成这件事呢</div>
      <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="你也可以选择"
        @select="handleSelect"
      ></el-autocomplete>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    name: 'inputCompent',
    data () {
      return {
        restaurants: [],
        state1: ''
      }
    },
    props: ['state1'],
    methods: {
      querySearch (queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      loadAll () {
        return [
          {value: '30'},
          {value: '45'},
          {value: '25'},
          {value: '20'}
        ]
      },
      handleSelect (item) {
        this.state1 = item.value
      }
    },
    mounted () {
      this.restaurants = this.loadAll()
    }
  }
</script>

<style>

</style>
