<template>
  <div class="hello">
    <van-search
  v-model="value"
  shape="round"
  background="#4fc08d"
  placeholder="请输入城市，景点，主题"
/>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch', // 基础组件，驼峰命名
  data () {
    return {
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
