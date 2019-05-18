<template>
    <div class="right" >
        <div class="spansBox" v-for="item in checkData" :key="item.code" >
            <span v-for="val in item.cities" :key="val.code" :class="{active : val.flag == true}" @click="tab(val,item)" >{{val.name}}</span>
        </div>
    </div>
</template>
<script>
import bus from './bus'
export default {
    props:[],
    components:{

    },
    data(){
        return {
            checkedID: 0,
            checkData : null,
        }
    },
    computed:{
           
    },
    methods:{
        tab(val,item){
            val.flag = val.flag == false ? true : false  
            let arr = item.cities.filter(item => {
               return item.flag == true
            })
            // console.log(item.code);
            bus.$emit('cityCount',arr.length,item.code);
        }
    },
    created(){
       
    },
    mounted(){
        let _this = this;
        bus.$on('findNext',function(item) {
            // console.log(item);
            _this.checkData=item
        })
    }
}
</script>
<style scoped lang="">
.right{
    width: 70%;
    height: 100%;
}
.spansBox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.active{
    background: salmon;
}
</style>