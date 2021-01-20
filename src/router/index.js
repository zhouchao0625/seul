import Vue from 'vue'	//引入vue
import VueRouter from 'vue-router'	//引入vue-router模块
import routes from './routes'	//引入路由配置文件(详见下方routes.js配置)
Vue.use(VueRouter)	//声明安装路由

export default new VueRouter({
    /*mode: history,*/
    routes: routes
})	//返回实例