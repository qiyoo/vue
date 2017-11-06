<template>
  <div style="text-align: left;">
    <div style="height:47px;border-bottom: 1px solid #737986;">
        <div style="position:fixed;z-index:9;left:0;top:0;">
            <x-header :left-options="{backText: '',showBack: true}":right-options="{showMore: true}">网易严选</x-header>
        </div>
    </div>
    <div>
        <div style="margin-bottom:1.6rem">
            <div style="position:relative;">
                <div >
                    <swiper :list="demo01_list"  style="width:100%;margin:0 auto;" :aspect-ratio="800/800" v-model="demo02_index" @on-index-change="demo01_onIndexChange"></swiper>                
                </div>
            </div>
            <div class="characteristic">
                细节描述
            </div>
            <div>
                <div class="content">
                    <div class="info">
                        <div class="name">
                            男式双面宽条纹T恤
                        </div>
                        <div class="decls">
                            花式对筒的双面考究
                        </div>
                        <div class="price">
                            <span>¥99</span>
                        </div>
                        <div class="tagList">
                            MUJI制造商
                        </div>
                    </div>
                    <div class="comment">
                        <div class="wraps">
                            <div class="num">
                                859
                            </div>
                            <div class="personCom">
                                用户评价
                            </div>
                            <div class="checkmore">
                                查看
                            </div>
                        </div>
                    </div>
                </div>
                <div class="selctions" style="margin-bottom:-1.65647059em;">
                    <span>
                        请选择规格数量
                    </span>
                </div>
                <div class="commentList">
                    <group>
                        <cell title="用户评价(859)" value="93.4% 好评" is-link></cell>
                    </group>
                    <div style="border-bottom:.26667rem solid #f4f4f;">
                        <!-- <header>
                            <h3 class="title">
                                <span>用户评价(</span>
                                <span>859</span>
                                <span>)</span>
                            </h3>
                            <div class="commentCheckAll">
                                <span>93.4% 好评</span>
                            </div>
                        </header> -->
                        <div class="commentContent">
                            评价内容
                        </div>
                    </div>
                </div>
                <div class="goodsDetails">
                    <div style="padding:.4rem;">
                        <div style="padding: .53333rem 0 .32rem;font-size: .37333rem;line-height: 1;">商品参数</div>
                    </div>
                    <img src="http://yanxuan.nosdn.127.net/52838b9bdd352afff2bc12531f3ecdc7.png?imageView&thumbnail=750x0&quality=75" width='320' alt="">
                </div>
                <!-- <div class="rmcdGoods">
                    <span class="line"></span>
                    <span class="text">大家都在看</span>
                </div> -->
                <divider style="padding: .72rem 0;">大家都在看</divider>
                <div class="m-goodGrid">
                    <grid :cols="2">
                        <grid-item>
                            <img  src="http://yanxuan.nosdn.127.net/ddeae05ced2d2f281641bbe34f2c9112.png?imageView&quality=85&thumbnail=330x330" style="width:147px;hegiht:147px;">
                            <div class="desc">MUJI制造商，舒适棉麻</div>
                            <div class="cnt">
                                <div>MUJI制造商</div>
                                <div>
                                    <span class="price1">¥</span>
                                    <span class="price2">12.9</span>
                                </div>
                            </div>
                            <div class="specification" >
                                <div>4</div>
                                <div>色</div>
                                <div>可</div>
                                <div>选</div>
                            </div>
                            <div class="tagWraper"></div>
                        </grid-item>
                        <grid-item>
                            <img  src="http://yanxuan.nosdn.127.net/4bd0c677e9174e13addc89d05fedbb23.png?imageView&quality=85&thumbnail=330x330" style="width:147px;hegiht:147px;">
                            <div class="desc">植物本草，自然凉爽</div>
                            <div class="tagWraper">
                                <p class="status gradientPrice">换季战靴</p>
                            </div>
                            <div class="cnt">
                                <div>MUJI制造商</div>
                                <div>
                                    <span class="price1">¥</span>
                                    <span class="price2">12.9</span>
                                </div>
                            </div>
                            <div class="specification" >
                                <div>4</div>
                                <div>色</div>
                                <div>可</div>
                                <div>选</div>
                            </div>
                        </grid-item>
                        <grid-item>
                            <img  src="http://yanxuan.nosdn.127.net/c351ed46e95431d5e86c6e657bf29895.png?imageView&quality=85&thumbnail=330x330" style="width:147px;hegiht:147px;">
                            <div class="desc">MUJI制造商，舒适棉麻</div>
                            <div class="cnt">
                                <div>MUJI制造商</div>
                                <div>
                                    <span class="price1">¥</span>
                                    <span class="price2">12.9</span>
                                </div>
                            </div>
                            <div class="specification" >
                                <div>4</div>
                                <div>色</div>
                                <div>可</div>
                                <div>选</div>
                            </div>
                        </grid-item>
                        <grid-item>
                            <img  src="http://yanxuan.nosdn.127.net/073d3c29b65746aaf9d96b9432b5306b.png?imageView&quality=85&thumbnail=330x330" style="width:147px;hegiht:147px;">
                            <div class="desc">植物本草，自然凉爽</div>
                            <div class="cnt">
                                <div>MUJI制造商</div>
                                <div>
                                    <span class="price1">¥</span>
                                    <span class="price2">12.9</span>
                                </div>
                            </div>
                            <div class="specification" >
                                <div>4</div>
                                <div>色</div>
                                <div>可</div>
                                <div>选</div>
                            </div>
                        </grid-item>
                    </grid>
                </div>
            </div>
        </div>
    </div>
    <tabbar>
        <tabbar-item>
            <span slot="label"> <i class="fa fa-headphones fa-2x"></i></span>
        </tabbar-item>
        <tabbar-item >
            <span slot="label">立即购买</span>
        </tabbar-item>
        <tabbar-item selected >
            <span slot="label">加入购物车</span>
        </tabbar-item>
    </tabbar>
  <arrow></arrow>
</div>
</template>
<script>
    import { XHeader, Swiper, Grid, GridItem, Tabbar, TabbarItem,Divider, Group, Cell, CellBox  } from 'vux'
    import Arrow from '../../../components/fixedBtn.vue'

    const baseList = [{
        url: 'javascript:',
        img: 'http://yanxuan.nosdn.127.net/52838b9bdd352afff2bc12531f3ecdc7.png?imageView&thumbnail=750x0&quality=75',
        title: ''
        }, {
        url: 'javascript:',
        img: '../../../../static/img/detailscroll.jpg',
        title: ''
        }, {
        url: 'javascript:',
        img: 'http://yanxuan.nosdn.127.net/52838b9bdd352afff2bc12531f3ecdc7.png?imageView&thumbnail=750x0&quality=75',
        title: '',
        fallbackImg: 'http://yanxuan.nosdn.127.net/52838b9bdd352afff2bc12531f3ecdc7.png?imageView&thumbnail=750x0&quality=75'
    }]

    const urlList = baseList.map((item, index) => ({
        url: 'http://m.baidu.com',
        img: item.img,
        fallbackImg: item.fallbackImg,
        title: ``
    }))

    export default {
        components: {
            XHeader, 
            Swiper, 
            Grid, 
            GridItem, 
            Tabbar,
            TabbarItem,
            Arrow,
            Divider,
            Group,
            Cell,
            CellBox 
        },
        methods: {
            demo01_onIndexChange (index) {
                this.demo01_index = index
            }
        },
        data(){
            return{
                demo01_list: baseList,
                demo02_index: 0,
                isNowPage: true
            }
        }
    }
</script>
<style scoped>
.vux-header{
    background-color:#fff;
    position: fixed;
    width: 100%;	
}
.vux-indicator-right{
    position: absolute;
    bottom:50px!important;
}
.characteristic{
    padding: .32rem .4rem;
    background-color: #F9F9F9;
    display: flex;
}
.content{
    padding: .53333rem 0 .53333rem .4rem;
    border-bottom: .26667rem solid #f4f4f4;
    display: flex;
}
.selctions{
       padding-left: .4rem; 
}
.content .info{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;   
}
.content .info .name{
    font-size: .48rem;
    margin-bottom: .06667rem;
}
.content .info .decls{
    font-size: .37333rem;
    line-height: 1;
    color: #7f7f7f;
}
.content .info .price{
    height: .74667rem;
    margin-bottom: .10667rem;
    font-size: .64rem;
    color: #B4282D;
    font-weight: 700;
}
.content .info .tagList{
    line-height: .48rem;
    height: .48rem;
    padding: 0 .13333rem;
    font-size: .32rem;
    border: 1px solid #f48f18;
    margin-right: .21333rem;
    margin-top: .26667rem;
    display: inline-block;
    height: .48rem;
}
.content  .comment{
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    background-image: linear-gradient(to bottom,#919191 33%,rgba(255,255,255,0) 0);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    width: 2.08rem;
    background-size: 1px 12px;
    background-repeat: repeat-y;
}
.comment .wraps .num{
    font-weight: 700;
    font-size: .48rem;
    line-height: 1;
    margin-bottom: .13333rem;
    color: #B4282D;
    text-align: center
}
.comment .wraps .personCom{
    color: #B4282D;
    line-height: 1;
    margin-bottom: .26667rem;
}
.comment .wraps .checkmore{
    border: 1px solid #7F7F7F;
    border-radius: 2px;
    text-align: center;
}
.selctions{
    padding-left: .4rem; 
    border-bottom: 1px solid #d9d9d9; 
    display: flex;
    -webkit-flex-flow: row nowrap;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    position: relative;
    min-height: 1.38667rem;
    padding-right: 1.06667rem;
    font-size: .37333rem;
    line-height: .4rem;
}
.commentList{
    background: #fff;
    border-bottom: .26667rem solid #f4f4f4;
}
.commentList header{
    margin-left: .4rem;
    position: relative;
    border-bottom: 1px solid #d9d9d9;
    padding: .4rem 2.4rem .4rem 0;
}
.commentList .title{
    line-height: .4rem;
    font-size: .37333rem;
    color: #333;
    display: initial;
}

.commentList .commentCheckAll{
    padding-right: .6rem;
    right: .21333rem;
    font-size: .37333rem;
    color: #333;
    height: .66667rem;
    line-height: .66667rem;
    display:inline ;
    position: absolute;
}
.commentList .commentContent{
    zoom: 1;
    padding: 0 .4rem;
    padding-bottom: .42667rem;
}
.goodsDetails{

}
.cnt{
	padding: .26667rem 0 0 .26667rem;
	width: 100%;
}
.cnt .price2,.cnt .price1{
    color:red
}
.weui-grid__icon img{
	display:none;
}
.weui-grids{
	margin: 0 .21333rem;
}
.weui-grid{
	padding: 0rem 0.13333333333333333rem 0.44rem 0.26666666666666666rem;
}
.m-goodGrid .desc{
    bottom: 0;
    width: 100%;
    background: #F1ECE2;
    border-radius: 0 0 .05333rem .05333rem;
    font-size: .32rem;
    color: #9F8A60;
    letter-spacing: 0;
    line-height: .38667rem;
    padding: .26667rem .13333rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.m-goodGrid .tagWraper {
    width: 100%;
    z-index: 1;
    padding-left: .13333rem;
    margin: .1rem 0 0 .05333rem;
    height: .4rem;
    overflow: hidden;
}
.m-goodGrid .specification{
    position: absolute;
    border-width: 1px;
    border-radius: .02667rem;
    border-style: solid;
    border-color: #b4a078;
    width: .42667rem;
    top: 0;
    margin-top: .13333rem;
    margin-left: .13333rem;
    padding: .16rem 0;
    color: #b4a078;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
}
.weui-grids:after{
	border: none
}
.weui-grid:after , .weui-grid:before{
	border: none;
} 
.m-goodGrid .status.gradientPrice {
    background-color: #f48f18;
}
.m-goodGrid .status {
    height: .4rem;
    padding: .06667rem .21333rem 0 .21333rem ;
    text-align: center;
    color: #fff;
    font-size: .26667rem;
    display: inline-block;
    vertical-align: middle;
    border-radius: 2px;
    line-height: .32rem;
    height: 22px;
}
.rmcdGoods{
    padding: .72rem 0;
    text-align: center;
    background-color: #fff;
    position: relative;
}
.rmcdGoods .line{
    width: 3.97333rem;
    border-bottom: 1px solid #ccc;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 1px;
    background-color: #ccc;
    z-index: 1;
}
.rmcdGoods .text{
    display: inline-block;
    font-size: .42667rem;
    padding-right: .21333rem;
    padding-left: .21333rem;
    line-height: 1;
    color: #333;
    background-color: #fff;
    position: relative;
    z-index: 2;
}
</style>

