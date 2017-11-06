<template>
		<!-- <ul>
			<li><router-link to='/'>首页</router-link></li>
			<li><router-link to='/home'>专题</router-link></li>
			<li><router-link to='/classes'>分类</router-link></li>
			<li><router-link to='/charts'>购物车</router-link></li>
			<li><router-link to='/me'>个人</router-link></li> 
		</ul> -->
		<div>
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
				<tabbar-item link="/me">
					<span slot="label">个人</span>
				</tabbar-item>
			</tabbar>
		</div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
	name:'footer',
	components: {
		Tabbar,
		TabbarItem
	}
}
</script>
<style scoped>
	/*li a{display: inline-block; width: 100%; height:100%;}
	.footer{width:100%; height:50px; bottom:0;}
	ul{display: flex; height:100%; line-height:50px;}
	ul li{flex: 1; background-color:#f1f1f1;}
	.isIndex li:first-child{background-color:#d3d3d3;}
	.isIndex li:first-child a{color:#41b883;}
	.isManage li:last-child{background-color:#d3d3d3;}
	.isManage li:last-child a{color:#41b883;} */
</style>
