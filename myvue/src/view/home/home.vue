<template>
  <div class="hello">
  <!-- //基础组件放置 -->
  <header-search></header-search>
    <swiper></swiper>
  </div>
</template>

<script>
import HeaderSearch from '../../components/header/header-search' // 引入基础组件
import Swiper from '../../components/swiper/swiper'
export default {
  components: { // 基础组件注入
    HeaderSearch,
    Swiper
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
