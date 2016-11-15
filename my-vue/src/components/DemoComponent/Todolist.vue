<template>
  <h1 v-html="title"></h1>
  <input type="text" v-model="newItem" v-on:keyup.enter="addNew">
  <button @click="addNew">提交</button>
  <button @click="clear">清空</button>
  <ul>
    <li v-for="item in items" :class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
      {{item.label}}
    </li>
  </ul>
</template>

<script>
import Store from '../../store'
export default {
  data(){
    return {
      title:'this is todolist',
      items: Store.fetch(),
      newItem: ''
    }
  },
  methods:{
      toggleFinish(item){
        item.isFinished=!item.isFinished;
      },
      addNew(){
        if(this.newItem.trim()){
          this.items.push({
            label:this.newItem,
            isFinished:false
          });
          this.newItem="";
        }
      },
      clear(){
        this.items=[];
      }
  },
  watch: {
    items:{
      handler(items){
        Store.save(items);
      },
      deep:true
    }
  }
}
</script>
<style>
.finished{
  text-decoration:underline;
}
</style>
