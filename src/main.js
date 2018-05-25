// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './view/App'
import router from './router'
import FastClick from 'fastclick'
import VueProgressBar from 'vue-progressbar' // get vue-progressbar
import InfiniteScroll from 'vue-infinite-scroll' // get vue-infinite-scroll
import "./assets/css/toast.css" //toast的css
import Toast from "./assets/plugin/toast"
import ResetRem from "./assets/plugin/resetRem" //将全局rem单位转换成1rem=100px
//import store from './store' // get vuex -> store

FastClick.attach(document.body); // init fastclick
var options = {
  color: '#fff',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
Vue.use(VueProgressBar, options);
Vue.use(InfiniteScroll);
Vue.use(Toast);
Vue.use(ResetRem);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  components: { App },
  template: '<App/>'
})
