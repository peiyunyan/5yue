<template>
  <div id="app">
    <!-- {{data}} -->
    <leftVue :data="data"></leftVue>
    <rightVue></rightVue>
  </div>
</template>

<script>
import leftVue from './components/left';
import rightVue from './components/right';
// import data from './data/city.json'

export default {
  name: 'App',
  components : {
    leftVue,rightVue
  },
  data() {
    return {
      data : null
    }
  },
  created() {
    this.axios.get('/list').then((data) => {
      data.data.forEach(item => {
        item.cities.forEach(val => {
          this.$set(val,'flag',false)
        })
      })
      this.data = data.data
      
      console.log(data);
    })
  },
  methods : {
    addFlag() {
      for(var i of this.data) {
        console.log(i);
      }
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
span{
  width: 80px;
  height: 50px;
  border: 1px solid #ccc;
  margin-top: 5px;
  display: block;
  text-align: center;
  border-radius: 5px;
  flex-shrink: 0;
  line-height: 50px;
}
</style>
