import Vue from 'vue'
import App from './App.vue'
import router from './router'	//引用router
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import axios from 'axios'

Vue.prototype.$bus = new Vue();
Vue.prototype.$http= axios

/*使用*/
/*this.$http({
  method: 'get',
  url: '/user',
  data: {
    name: 'virus'
  }
})*/

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App) //加到这里渲染到视图
}).$mount('#app')
