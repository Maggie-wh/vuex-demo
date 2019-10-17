<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ wh }}</h3>
    <p>count2: {{ count2 }}</p>
    <button @click="count2DEL">点击减</button>
    <button @click="count2ADD">点击加</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    count2(){
      return this.$store.state.count2
    }
  },
  methods: {
    count2DEL(){
      this.$store.commit('countDel')
    },
    count2ADD(){
      this.$store.commit('count2Add')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
