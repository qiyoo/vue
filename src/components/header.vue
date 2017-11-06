<template>
	<div>
        <!-- <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-x:hidden;">
        <tab style="width:500px;" lock-y :scrollbar-x=false>
            <tab-item>已发货</tab-item>
            <tab-item selected>未发货</tab-item>
            <tab-item>全部订单</tab-item>
            <tab-item>全部订单</tab-item>
            <tab-item>全部订单</tab-item>
        </tab>
        </div>  -->
        <div style="height:63px;position:fixed;z-index:999;width:100%;overflow: hidden;">
            <div class="m-indexHd">
                <div class="line">
                    <a  href="/" class="logo" ></a>
                    <div class="m-topSearchIpt ipt">
                        <i class="icon" ></i>
                        <span class="placeholder" >搜索商品, 共9044款好物</span>
                    </div>
                </div>
                <div id="list" class="list" style="padding-left:0px;width:100%;">
                    <tab :line-width=3 active-color='#fc378c' v-model="index" style="width:481px;" > 
                        <tab-item selected > <router-link to="/index/foo">推荐</router-link></tab-item>
                        <tab-item ><router-link to="/index/foo/live">居家</router-link></tab-item>
                        <tab-item ><router-link to="/index/foo/live">餐厨</router-link></tab-item>
                        <tab-item ><router-link to="/index/foo/live">配件</router-link></tab-item>
                        <tab-item ><router-link to="/index/foo/live">电器</router-link></tab-item>
                        <tab-item ><router-link to="/index/foo/live">洗护</router-link></tab-item>
                        <tab-item ><router-link to="/index/foo/live">杂货</router-link></tab-item>
                        <tab-item ><router-link to="/index/foo/live">饮食</router-link></tab-item>
                        <tab-item ><router-link to="/index/foo/live">婴童</router-link></tab-item>
                        <tab-item ><router-link to="/index/foo/live">志趣</router-link></tab-item> 
                    </tab>
                </div>
            </div> 
        </div>
        <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
      
    </div>
	</div>
</template>

<script>
	import { Tab, TabItem} from 'vux'
	export default{
		components: {
			Tab,
			TabItem
		},
		data(){
			return{
      			index: 0
			}
        },
        mounted:function(){
            this.$nextTick(function(){
                document.getElementById("list").addEventListener('touchstart',this.touchstart);
            }) 
        },
        methods:{
            touchstart:function(event){
                //alert(0); 
            }
        }
	}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.vux-tab{
    height: 25px;
}
.vux-tab .vux-tab-item{
    line-height: 25px;
    margin-left: .64rem;
}
</style>

