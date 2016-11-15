<template>
  <div class="buttons">
    <div>Event Text : {{ eventTxt}}</div><br>
    <button v-on:click="onClickMe">Click!</button>
    <Events-Child></Events-Child>
  </div>
</template>

<script>
import EventsChild from './EventsChild';
export default {
  data(){
    return {
      msg:'hello from component a!',
      none:'not get',
      fathertext:"",
      eventTxt:"nothing"
    }    
  },
  components:{ EventsChild },
  props:['fatherMsg'],
  methods:{
    onClickMe(){
      this.eventTxt = this.msg;
    }  
  },
  ready(){
    this.$once('call-event',function(msg){
      this.eventTxt=msg
    });
  }
}
</script>

<style>
  h1 {
    color: #42b983;
  }
</style>