<template>
  <div class="demo">
    <div class="title">{{title}}</div>
    <Cart></Cart>
  </div>
</template>

<script>
import Cart from './Cart'
export default {
  data () {
    return {
      title: 'Demo'
    }
  },
  components: {
    Cart
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.demo{
  text-align:left;
  width:400px
}
</style>
