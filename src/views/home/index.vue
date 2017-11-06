<template>
	<div>
		我是专题
		<div>
			<tabbar>
			<tabbar-item  link="/">
				<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item link='/home' selected>
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
		</div>
	</div>
</template>


<script>
	import footerNav from '../../components/footer.vue'
	import { Tabbar, TabbarItem } from 'vux'

	export default{
		components: {
			footerNav,
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
