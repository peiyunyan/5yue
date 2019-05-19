<template>
    <div class="box">
        <dl v-for="item in dataList" :key="item.id" class="itemBox">
            <dt>
                <img :src="item.fontImg" alt="">
            </dt>
            <dd>
                <span>{{item.title}}</span>
                <span>{{item.price}}</span>
                <button v-if="item.count > 0" @click="reducFn(item)">-</button>
                <span v-if="item.count > 0">{{item.count}}</span>
                <button @click="addFn(item)">+</button>
            </dd>
        </dl>
    </div>
</template>
<script>
import sub from '../sub'
export default {
    props:['dataList'],
    components:{

    },
    data(){
        return {
            shopData : []
        }
    },
    computed:{
        
    },
    methods:{
        addFn(item){
            let inde = this.shopData.findIndex((val,ind) => {
                return val.id == item.id
            })
            console.log(inde);
            if(inde) {
                this.shopData.push(item)
                sub.$emit('shop',this.shopData)
            } else {
                this.shopData[inde].count++
            }
            console.log(this.shopData)
        },
        reducFn(item){
            if(item.count >=0) {
                item.count--
            }
        }
    },
    created(){

    },
    mounted(){
        
    }
}
</script>
<style scoped lang="">
.itemBox{
    width: 30%;
    height: 150px;
}
img{
    width: 100%;
    height: 100px;
}
</style>
