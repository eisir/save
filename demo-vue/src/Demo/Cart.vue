<template>
  <div>
    <h3>{{title}}</h3>
    <div class="list">
      <div class="select-title">
        <input type="checkbox" v-model="selectAll"/> 全选
      </div>
      <div class="items">
        <div class="item" v-for="item in items">
          <input type="checkbox" v-bind:value="item.id" v-model="item.selected" > {{ item.name }}
        </div>
      </div>
      <div class="select-title">
        <input type="checkbox" v-model="selectAll"/> 全选
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'A Cart',
      items:[]
    }
  },
  mounted(){
    this.$http.get('data/list.json')
    .then((res)=>{
      this.items = res.data.data;
    })
  },
  computed:{
    selectAll:{
      get: function(){
        let s = true
        this.items.forEach(function(v){
          if (v.selected == false)
            s = false;   
        })
        return s;
      },
      set: function(val){
       this.items.forEach(v=>{
         v.selected = val;
       });
      }
    }
   
  }
}
</script>

<style scoped>
.select-title {
  height:30px;
  line-height:30px;
  font-weight:bold;
}

</style>