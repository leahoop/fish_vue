import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/

export const constantRouterMap = [
    {
        path: '/file',
        name: '文件列表',
        meta: {title: '文件列表', noCache: true},
        component: () => import('@/views/file')
    },
    {
        path: '/stock',
        name: '今日',
        meta: {title: '今日', noCache: true},
        component: () => import('@/views/stock')
    },
    {
        path: '/',
        name: '首页',
        meta: {title: '首页', noCache: true},
        component: () => import('@/views/hello')
    }
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})
