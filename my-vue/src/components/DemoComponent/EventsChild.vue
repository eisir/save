<template>
  <a href="http://www.baidu.com">baidu</a>
  <button @click='clickEventChild'>EventChild 触发一次</button>
</template>
<script>
export default{
  data(){
    return {
      msg:'eventChld text'
    }
  },
  methods:{
    clickEventChild(){
      this.$dispatch('call-event',this.msg)
    }
  }
}
</script>