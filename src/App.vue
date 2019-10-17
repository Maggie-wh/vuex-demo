<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome WH!" wh="哈哈哈哈"/>
    <p>count: {{count}}</p>
    <button @click="countADD">点击</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    countADD(){
      const v=100;
      this.$store.commit('countAdd',v)
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
  border:1px red(101, 179, 101) solid;
  padding:10px;
  background:rgb(65, 184, 131);
  border-radius: 10px;
}
</style>
