<template>
  <div id="app">  
    <router-view></router-view>
  </div>
</template>

<script>
import api from './api/index'

export default {
  
  data(){
    return {
      content:''
    }
  },
  mounted: function() {
    let vue = this;
    api.getNews().then(function(data) {
      console.log(data)
        vue.content = data['data']['date']      
		})
	},
  methods:{
    handleButtonClick(){
       this.$toast('Hello world!')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
