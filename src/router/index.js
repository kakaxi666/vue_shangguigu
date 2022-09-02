//配置路由
import Vue  from "vue";
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter);
//配置路由
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originPush.call(this, location).catch(err => err)
}  
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
export default new VueRouter({
    //配置路由
    //引入路由组件
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search",
            component:Search,
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:true}
        }
    ]
})