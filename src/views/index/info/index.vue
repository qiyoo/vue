<template>
	<div>
		<div class="m-indexFloor">
			<swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
		</div>		
		<div class="m-indexFloor">
			<x-header :left-options="{backText: '',showBack: false}">品牌制造商直供</x-header>
			<grid :cols="2">
				<grid-item link='/scndManufacturer'>
					<div class="cnt">
						<div>MUJI制造商</div>
						<div>
							<span class="price1">19</span>
							<span class="price2">元起</span>
						</div>
					</div>

					<img  src="http://yanxuan.nosdn.127.net/4bdc2ae0a30c4a10ea95876a67c695bc.png" style="width:151px;hegiht:100px;">
				</grid-item>
				<grid-item>
					<img  src="http://yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png" style="width:151px;hegiht:100px;">
				</grid-item>
				<grid-item>
					<img  src="http://yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png" style="width:151px;hegiht:100px;">
				</grid-item>
				<grid-item>
					<img  src="http://yanxuan.nosdn.127.net/4bdc2ae0a30c4a10ea95876a67c695bc.png" style="width:151px;hegiht:100px;">
				</grid-item>
			</grid>
		</div>
		<div class="m-indexFloor">
			<x-header :left-options="{backText: '',showBack: false}">周一至周四·新品首发</x-header>
			<scroller lock-y :scrollbar-x=false>
				<div class="box1">
					<div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
				</div>
			</scroller> 
		</div>
	</div>
</template>

<script>
	import { XHeader, Swiper,Scroller, Grid, GridItem } from 'vux'
    
	const baseList = [{
		url: 'javascript:',
		img: 'https://static.vux.li/demo/1.jpg',
		title: '送你一朵fua'
		}, {
		url: 'javascript:',
		img: 'https://static.vux.li/demo/2.jpg',
		title: '送你一辆车'
		}, {
		url: 'javascript:',
		img: 'https://static.vux.li/demo/3.jpg',
		title: '送你一次旅行',
		fallbackImg: 'https://static.vux.li/demo/3.jpg'
	}]

	const urlList = baseList.map((item, index) => ({
		url: 'http://m.baidu.com',
		img: item.img,
		fallbackImg: item.fallbackImg,
		title: ``
	}))

	

	export default{
		components: {
			Swiper,
			Scroller,
			XHeader,
			Grid, 
			GridItem
		},
		ready () {

		},
		mounted () {
		},
		methods: {
			demo06_onIndexChange (index) {
			this.demo06_index = index
			}
		},
		data(){
			return{
				demo06_list: urlList,
				demo06_index: 0
			}
		}
	}
</script>
<style scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.m-indexFloor {
    margin-bottom: .26667rem;
    background-color: #fff;
}
.vux-header{
	background-color:#fff;	
}
.weui-grid__icon img{
	display:none;
}
.weui-grids{
	margin: 0 .21333rem;
}
.weui-grid{
	padding: 0px;
}
/* 品牌制造商去边框 */
/* .weui-grids:after{
	border: none
}
.weui-grid:after , .weui-grid:before{
	border: none;
} */
.cnt{
	position: absolute;
	padding: .26667rem 0 0 .26667rem;
	width: 100%;
    text-align: left;
}
</style>

