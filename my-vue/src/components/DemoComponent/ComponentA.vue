<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>get father words:{{ fathertext || none }}</h1>
    <button v-on:click="onClickMe">Click me! get props</button>
    <button v-on:click="onClickMe2">Click me! get active props</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:'hello from component a!',
      none:'not get',
      fathertext:"",
      onceMsg:"Once Click!"      
    }    
  },
  init(){
    console.log('this is init')
  },
  created(){
    console.log('this is created')
  },
  beforeCompile(){
    console.log('this is beforeCompile')
  },
  ready(){
    console.log('this is ready')
  },
  attached(){
    console.log('this is attached')
  },
  detached(){
    console.log('this is detached')
  },
  beforeDestroy(){
    console.log('this is beforeDestroy')
  },
  destroyed(){
    console.log('this is destroyed')
  },
  props:['fatherMsg','fatherMsg2'],
  methods:{
    onClickMe(){
      this.fathertext = this.fatherMsg;
    },
    onClickMe2(){
      this.fathertext = this.fatherMsg2;
    }
  }
}
</script>

<style>
  h1 {
    color: #42b983;
  }
</style>