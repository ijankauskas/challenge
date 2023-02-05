<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
    
  }
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app{
  background-color: #15171E;
  height: 100vh;
}
</style>
