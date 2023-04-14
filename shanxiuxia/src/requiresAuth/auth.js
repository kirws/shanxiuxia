import router from '@/router'
import axios from 'axios';

// 封装方法：判断是否登录
// 方法一：判断 user_id
/*
function isLogin() {
    const user = localStorage.getItem("user");
    if (user) {
        // 有用户信息，判断有没有 user_id
        const user_id = JSON.parse(user).user_id;
        if (user_id) {
            // 有user_id，返回 true 表示登录过了
            return true;
        }else{
            // 没有user_id，返回 false 表示没有登录
            return false;
        }
    } else {
        // 没有用户信息，返回 false 表示没有登录
        return false;
    }
}
// 全局路由守卫
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLogin()) {
            next({
                path: "/main/login",
                query: {redirect: to.fullPath}
            })
        }else{
            next();
        }
    } else {
        next()
    }
})
*/

// 方法二：可以直接发送 v1/user 请求，如果能获取到用户信息说明登录了，不能获取到用户信息说明没有登录(这个请求利用的是 cookie 中的 SID 来获取用户信息的)
router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {
        axios.get("/elm/v1/user").then(res=>{
            if (!res.data.user_id) {
                next({
                    path: "/main/login",
                    query: { redirect: to.fullPath }
                })
            }else{
                next();
            }
        })
    } else {
        next()
    }
}) 

