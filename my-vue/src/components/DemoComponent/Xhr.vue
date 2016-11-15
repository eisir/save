<template>
  <div>
    <button class="xhr" v-on:click='changeData'>{{button_txt.vue_resource}}</button>
    <button class="xhr" v-on:click='changeData_jq'>{{button_txt.jq_btn}}</button>
  </div>
  <br>
  <div>{{responseData}}</div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      banner: [],
      tasks: [],
      button_txt:{
        jq_btn:'jquery ajax',
        vue_resource:'vue resource'
      },
      responseData:"no data"
    }
  },
  methods:{
    changeData(){      
      this.$http.get('test.json')
      .then((data) => {
        console.log(data.data)
        this.$set('responseData',JSON.stringify(data, null, 4));
      })
    },
    changeData_jq(){
      var _this=this;
      $.ajax({
        url: 'http://g.cn',
      }).done(function(data, status, xhr){
          console.log(data, null, 4)
          _this.$set('responseData',JSON.stringify(data, null, 4)) 
          console.log(data)  
      });
    }    
  }
}
</script>