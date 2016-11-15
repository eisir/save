<template>
  <div id="app">
    <demo></demo>
  </div>
</template>

<script>
import Demo from './components/Demo';
export default {
  data(){
    return {
      fatherwords:'from father',
      childWords:''
    }
  },
  components: {
    Demo
  }
}
</script>

<style>
.finished{
  text-decoration:underline;
}
html {
  height: 100%;
}

body {
  display: flex;
  /*align-items: center;*/
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: left;  
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
h5{
  font-size:18px;
}
</style>
