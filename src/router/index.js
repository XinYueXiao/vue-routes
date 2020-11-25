import Vue from "vue";
import Router from "vue-router";
import Layout from '@/layout'; // 布局页

Vue.use(Router);

// 通用页面：不需要守卫，可直接访问
export const constRoutes = [
    {
        path: "/login",
        component: () => import("@/views/Login"),
        hidden: true // 导航菜单忽略该项
    },
    {
        path: "/",
        component: Layout,// 应用布局
        redirect: "/home",
        children: [
            {
                path: "home",
                component: () =>
                    import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
                name: "home",
                meta: {
                    title: "Home", // 导航菜单项标题
                    icon: "qq" // 导航菜单项图标
                }
            }
        ]
    }
];

// 权限页面：受保护页面，要求用户登录并拥有访问权限的角色才能访问
export const asyncRoutes = [
    {
        path: "/about",
        component: Layout,
        redirect: "/about/index",
        meta: { title: '用户中心' },
        children: [
            {
                path: "index",
                component: () =>
                    import(/* webpackChunkName: "home" */ "@/views/About.vue"),
                name: "about",
                meta: {
                    title: "About",
                    icon: "qq",
                    roles: ['admin', 'editor']
                },
            },
            {
                path: "abc",
                component: () =>
                    import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
                name: "abc",
                meta: {
                    title: "abc", // 导航菜单项标题
                    icon: "wx" // 导航菜单项图标
                }
            }
        ]
    }
];

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: constRoutes
});