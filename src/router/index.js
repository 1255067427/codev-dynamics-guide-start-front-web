import Vue from 'vue'
import Router from 'vue-router'

import Index from "@/views/Index.vue"
import Videos from "@/components/Videos.vue"
import VideosDrone from '@/components/VideosDrone'
import VideosAviator from '@/components/VideosAviator'
import ProductInfoSheet from '@/components/ProductInfoSheet'
import ProductInfoSpec from '@/components/ProductInfoSpec'
import ProductInfoIntroduction from '@/components/ProductInfoIntroduction'
Vue.use(Router)

const routes = [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/index',
        component: Index,
    },
]

const router = new Router({
    // mode: 'history',
    routes,
})

let originPush = Router.prototype.push;
let originReplace = Router.prototype.replace;
//重写push/replace
//第一个参数：告诉原来的push方法，往哪里跳转（传递哪些参数）
//第二个参数：成功的回调
//第三个参数：失败的回调
//call/apply区别
//相同点：都可以调用函数一次，都可以篡改函数的上下文(this）一次‘
//不同点：call/apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
Router.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
Router.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

export default router
