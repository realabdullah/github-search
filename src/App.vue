<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #9013fe;
  padding: 10px;
  color: #fff;
  /* background: linear-gradient(123deg, #461B93 0%, #461B93 40%, #6A3CBC calc(40% + 1px), #6A3CBC 60%, #8253D7 calc(60% + 1px), #8253D7 70%, #F78F1E calc(70% + 1px), #F78F1E 100%);
  
  background-attachment: fixed; */
  overflow: hidden;
}
</style>
