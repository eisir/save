<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <Demo></Demo>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Demo from './Demo/Demo'

export default {
  components: {
    Hello,
    Demo
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.title{
  font-weight:bold;
  text-align:left;
}
#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
