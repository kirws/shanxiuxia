import { createStore } from "vuex";
import axios from "axios";
import "./interceptor";

// 拦截器

export default createStore({
  state: {
    xx: "20"
  },
  getters: {},
  mutations: {},
  actions: {
    requestGame() {
      // fetch("/douyu/game").then((res)=>{
      //   // 返回的是普通字符串
      //   // return res.text()
      //   // 返回的是json字符串 (转成对象)
      //   return res.json()
      // }).then((res)=>{
      //   console.log(res);
      // })
      return new Promise((resolve, reject) => {
        fetch("/douyu/game", {
          method: "GET",
          headers: {
            // body data type must match "content-Type" header
            // Content-Type: application/x-www-form-urlencoded
            // body : "name=zs&age=18"
            // Content-Type: application/json
            // body : {name: "zs",age:18}
          },
          // body: {}
        }).then((res) => {
          return res.json()
        }).then((res) => {
          resolve(res.data);
        }).catch(err => {
          reject(err);
        })
      })
    },
    requestLive(context, { id, offset, limit }) {
      return new Promise((resolve, reject) => {
        axios.get(`/douyu/live/${id}`, {
          params: {
            offset,
            limit
          }
        }).then(res => {
          resolve(res.data);
        }).catch(err => {
          reject(err);
        })
      })
    }
  },
  modules: {},
});
