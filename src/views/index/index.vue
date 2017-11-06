<template>
	<div>
		<header-nav v-bind:class="{'isIndex':isNowPage}"></header-nav>
		<div style="padding-top:63px;margin-bottom:64px;">
			<router-view></router-view>
		</div>
		<tabbar>
			<tabbar-item  link="/" selected>
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
			<tabbar-item link="/me">
				<span slot="label">个人</span>
			</tabbar-item>
		</tabbar> 
		<arrow></arrow>
	</div>
</template>

<script>
	import HeaderNav from '../../components/header.vue'
	import Arrow from '../../components/fixedBtn.vue'
	
	import { Tabbar, TabbarItem } from 'vux'

	export default{
		components: {
			HeaderNav,
			Tabbar, 
			TabbarItem,
			Arrow
		},
		data(){
			return{
				isNowPage: true
			}
		},
		methods:{
			onscrollMove:function(){
				alert(0)
			}
		}
	}
</script>
<style scoped>
</style>

