<template>
	<div>
        我是个人
		<tabbar>
			<tabbar-item  link="/">
				<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item link='/home'>
				<span slot="label">专题</span>
			</tabbar-item>
			<tabbar-item link="/classes">
				<span slot="label">分类</span>
			</tabbar-item>
			<tabbar-item link="/charts">
				<span slot="label">购物车</span>
			</tabbar-item>
			<tabbar-item link="/me" selected>
				<span slot="label">个人</span>
			</tabbar-item>
		</tabbar> 
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'

	export default{
		components: {
			Tabbar, 
			TabbarItem
		},
		data(){
			return{
				isNowPage: true
			}
		}
	}
</script>
<style lang="less" scoped>
</style>
