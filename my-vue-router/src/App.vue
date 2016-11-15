<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <p>
    <a v-link="{ path: '/' }" v-on:click="onClick">home</a>
    <br>
    <a v-link="{ path: '/foo' }" v-on:click="onClick">Go to Foo</a>
    <br>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
    <br>
    <a v-link="{ path: '/foo/baz' }">Go to Baz</a>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
var i=0;
export default {
  methods:{
    onClick(){
      console.log(i++)
    }
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
