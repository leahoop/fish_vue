<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import HelloWorld from './views/hello.vue'
import File from './views/file.vue'

export default {
  name: 'app',
  // components: {
  //   HelloWorld,
  //     File
  // }
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
</style>
