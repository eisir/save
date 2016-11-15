<template>
  <div class="demo">
    <h5>todolist component</h5>
    <todolist></todolist>
    <br>
    <h5>ComponentA component</h5>
    <component-a father-msg='father msg' :father-msg2='fatherwords'></component-a>
    <br>
    <h5>Events component</h5>
    <events></events>
    <h5>slot component</h5>
    <h5>Xhr</h5>
    <xhr></xhr>
  </div>
</template>




<script>
import Mock from 'mockjs'
import Todolist from './DemoComponent/Todolist';
import ComponentA from './DemoComponent/ComponentA';
import Events from './DemoComponent/Events';
import Xhr from './DemoComponent/Xhr';

Mock.mock('http://g.cn', {
    'name'	   : '@name()',
    'age|1-100': 100,
    'color'	   : '@color'
});

export default {
  data(){
    return {
      fatherwords:'from father data',
      childWords:''
    }
  },
  components: {
    Todolist,
    ComponentA,
    Events,
    Xhr
  },
  methods:{
    listenFromChild(msg){
      this.childWords=msg;
    },
    onceFahter(){
      console.log('once');
    }
  }
}
</script>
<style>
  h5{
    margin-left:-20px
  }
</style>