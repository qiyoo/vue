# phone

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#修改组件内容
##tabbar中重新定义了.weui-tabbar类的position属性值；将绝对定位(absoluted)修改为固定定位（fixed）
##tab中修改了barLeft方法中的大小，加了4
##文件build出错，配置的时候需要安装vue-loader,然后参考webpack.base.conf.js配置
##打包后index.html无法访问的问题，修改build.js文件中的路径为相对路径http://www.dabaipm.cn/static/frontend/346.html
##打包后如何放置在服务器上http://blog.csdn.net/Dear_Mr/article/details/72871919