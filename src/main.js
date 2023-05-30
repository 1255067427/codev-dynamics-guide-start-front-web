import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.use(ElementUI);
axios.defaults.baseURL="http://localhost:8080";
ElementUI.Dialog.props.lockScroll.default = false;
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
