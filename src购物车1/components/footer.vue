<template>
    <div class="footer">
        {{total}}
    </div>
</template>
<script>
import sub from '../sub'
export default {
    props:{
        
    },
    components:{

    },
    data(){
        return {
            shopCar : []
        }
    },
    computed:{
        total() {
            let total = 0;
             this.shopCar.forEach(item => {
               total = item.count * item.price
            })
            return total
        }
    },
    methods:{

    },
    created(){
        let _this = this
        sub.$on('shop',function(data) {
            _this.shopCar = data
            console.log(data);
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .footer{
        width: 100%;
        height: 45px;
        background: saddlebrown;
        display: flex;
        flex-direction: row;
    }
</style>