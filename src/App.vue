<template>
  <img alt="Vue logo" style="width: 150px;" src="./assets/logo.png">  
  <h2>+</h2>
  <img alt="Rollbar logo" style="width: 350px;" src="data:image/png;base64,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">
  <br><br>
  <RollbarTest></RollbarTest>
  <HelloWorld msg="Welcome to Your Vue.js Demo App with Rollbar"/>

</template>



<script>
import HelloWorld from './components/HelloWorld.vue'
import RollbarTest from './components/RollbarTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    RollbarTest
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
