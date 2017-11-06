<template>
  <div style="text-align: left;">
    <div style="position:relative;height: 40px;">
        <x-header :left-options="{backText: '',showBack: true}":right-options="{showMore: true}">网易严选</x-header>
    </div>
    <div class="manufacturer-header" style="position:relative;">
        <div class="imgWraper">
            <img src="http://yanxuan.nosdn.127.net/3743ffe302c32e167fd65179ac109710.jpg">
        </div>
        <header class="header" >
            <div class="banner">MUJI制造商</div>
            <div class="btn">上新提醒</div>
        </header>
        <div class="desc" >
            <div>严选精选了MUJI制造商和生产原料，</div>
            <div>用几乎零利润的价格，剔除品牌溢价，</div>
            <div>让用户享受原品牌的品质生活。</div>
        </div>
    </div>
    <div class="m-sticky m-sticky-sticky m-sticky-mounted" style="top: 0px;" >
        <div class="placeholder" style="height: 35.125px;"></div>
        <div class="inner" style="top:0;" >
            <div class="m-filter">
                <ul class="conditions">
                    <li class="item">
                        <div class="condition active">
                            <div class="txt">综合</div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="condition descAsc">
                            <div class="txt">上新</div>
                        </div>
                    </li>
                    <li class="item" data-reactid=".0.1.0.1.1.0.0.2">
                        <div class="condition descAsc">
                            <div class="txt">价格</div>
                            </div>
                    </li>
                    <li class="item">
                        <div class="condition">
                            <div class="txt">分类</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="m-goodGrid">
        <grid :cols="2">
            <grid-item link='/threeDtail'>
                <img  src="http://yanxuan.nosdn.127.net/7dfbbfcae3832a37fffce952990a678b.png?imageView&quality=85&thumbnail=330x330" style="width:147px;hegiht:147px;">
                <div class="desc" >进口网布，muji制造商</div>
                <div class="cnt">
                    <div>球形洗衣网</div>
                    <div>
                        <span class="price1">¥</span>
                        <span class="price2">12.9</span>
                    </div>
                </div>
            </grid-item>
            <grid-item>
                <img  src="http://yanxuan.nosdn.127.net/644e01334ec1445ae39da6c044c92815.png?imageView&quality=85&thumbnail=330x330" style="width:147px;hegiht:147px;">
                <div class="desc">3D立体保护，防止变形</div>
                <div class="cnt">
                    <div>内衣洗衣网</div>
                    <div>
                        <span class="price1">¥</span>
                        <span class="price2">12.9</span>
                    </div>
                </div>
            </grid-item>
            <grid-item>
                <img  src="http://yanxuan.nosdn.127.net/644e01334ec1445ae39da6c044c92815.png?imageView&quality=85&thumbnail=330x330" style="width:147px;hegiht:147px;">
                <div class="desc">球形洗衣网（小、中、大）+内衣洗衣网</div>
                <div class="cnt">
                    <div>洗衣网组合</div>
                    <div>
                        <span class="price1">¥</span>
                        <span class="price2">12.9</span>
                    </div>
                </div>
            </grid-item>
            <grid-item>
                <img  src="http://yanxuan.nosdn.127.net/7dfbbfcae3832a37fffce952990a678b.png?imageView&quality=85&thumbnail=330x330" style="width:147px;hegiht:147px;">
                <div class="desc">好食美器，沙拉甜品水果</div>
                <div class="cnt">
                    <div>冷纹系列餐具</div>
                    <div>
                        <span class="price1">¥</span>
                        <span class="price2">12.9</span>
                    </div>
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
    <arrow></arrow>
</div>
</template>
<script>
import { XHeader, Grid, GridItem } from 'vux'
import Arrow from '../../../components/fixedBtn.vue'

export default {
  components: {
    XHeader, 
    Grid, 
    GridItem,
	Arrow
     
  }
}
</script>
<style scoped>
.vux-header{
    background-color:#fff;
    position: fixed;
    width: 100%;	
}
.manufacturer-header .imgWraper{
    width: 100%;
    height: 5.33333rem;
}
.manufacturer-header .imgWraper img{
    width: 100%;
    height:100%;
}
.manufacturer-header .header{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: .77333rem;
    padding: 0 .4rem;
    margin-top: .25333rem;
    background-color: #fff;
}
.manufacturer-header .header .banner {
    height: .74667rem;
    line-height: .74667rem;
    font-size: .48rem;
    font-weight: 700;
}
.manufacturer-header .header .btn {
    height: .74667rem;
    line-height: .74667rem;
    font-size: .37333rem;
    width: 1.92rem;
    text-align: center;
    border: 1px solid #979797;
    border-radius: 3px;
}
.manufacturer-header .desc {
    padding: .16rem .4rem .48rem;
    font-size: .37333rem;
    color: #666;
    background-color: #fff;
    border-bottom: .26667rem solid #f4f4f4;
}

.m-sticky,
.m-sticky-mounted {
    position: relative
}

.m-sticky {
    z-index: 4;
    top: 0;
    left: 0
}

.m-sticky .inner {
    width: 100%
}

.m-sticky-mounted>.inner {
    position: absolute;
    left: 0;
    top: 0
}

.m-sticky-fixed>.inner {
    position: fixed
}

.m-sticky-sticky {
    position: -webkit-sticky;
    position: sticky
}
.m-filter {
    position: relative;
    z-index: 6
}
.m-filter .conditions {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    position: relative;
    z-index: 1;
    background-color: #fff;
    border-bottom: 1px solid #d9d9d9
}

.m-filter .conditions>.item {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}
.m-filter .conditions>.item>.condition {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
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
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    width: 100%;
    height: 1.06667rem
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
</style>

