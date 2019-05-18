<template>
    <div class="left">
        <span 
        v-for="item in data" 
        :key="item.code"
        :class="{active : i === item.code}"
        @click="tabShen(item)"
        >{{item.name}} <sub v-if="count != 0 && item.code == countID">{{count}}</sub> </span>
       
    </div>
</template>
<script>
import bus from './bus'
export default {
    props:['data'],
    components:{

    },
    data(){
        return {
            i : 101010200,
            count : 0,
            countID : 0
        }
    },
    computed:{
        
    },
    methods:{
        tabShen(item){
            this.i = item.code
            bus.$emit('findNext',this.data.filter(val =>val.code == item.code))
        }
    },
    created(){

        
    },
    mounted(){
        let _this = this;
         bus.$on('cityCount',function(count,codeID) {
             _this.count = count;
             _this.countID = codeID
         })
    },
    watch: {
       
    }
}
</script>
<style scoped lang="">
.left{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
.active{
    background: yellowgreen
}
</style>