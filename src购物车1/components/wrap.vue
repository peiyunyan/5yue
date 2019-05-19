<template>
    <div class="wrap">
        <div class="topBox">
            <span v-for="(item,ind) in options" :key="ind" :class="{active :i === ind}" @click="tabFn(item,ind)">{{item.title}}</span>
        </div>
        <listVue :dataList = 'goodList'></listVue>
    </div>
</template>
<script>
import listVue from './list'
export default {
    props:{
        "options" : Object
    },
    components:{
        listVue
    },
    data(){
        return {
            i : 0,
            goodList : null
        }
    },
    computed:{

    },
    methods:{
        tabFn(item,ind){
            this.i = ind
            this.goodList = item.list
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.topBox{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.active{
    color: red;
}
</style>