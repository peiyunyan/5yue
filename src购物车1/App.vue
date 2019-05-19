<template>
  <div id="app">
    <!-- {{dataList}} -->
    <wrapVue :options="dataList"></wrapVue>
    <footerVue></footerVue>
  </div>
</template>

<script>
import wrapVue from './components/wrap'
import footerVue from './components/footer'
import axios from 'axios';
export default {
  name: 'App',
  components : {
    wrapVue,footerVue
  },
  data() {
    return {
      dataList : null
    }
  },
  created() {
    axios.get('/list').then((data) => {
      this.dataList = data.data.data
      console.log(data.data.data);
    })
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
  flex-direction: column;
}
</style>
