import axios from "axios";
import Cookies from "js-cookie";
import { Message, Loading } from "element-ui";
import vue from "../main";

let loadingInstance = Loading.service({
  text: "加载中...",
});
const request = axios.create({
  baseURL: "http://47.242.254.89:3000",
  timeout: 6000,
});

//请求错误处理函数
const err = (error) => {
  vue.$nextTick(() => {
    // 以服务的方式调用的 Loading 需要异步关闭
    loadingInstance.close();
  });
  if (error.response) {
    console.log(this);
    const data = error.response.data;
    if (error.response.status === 403) {
      Message.warning(data.message || data.msg);
    }
    if (error.response.status === 401) {
      Message.error("你没有权限");
    }
  } else {
    Message(error.message);
  }

  return Promise.reject(error);
};
//请求拦截器
request.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers["token"] = token;
  }
  return config;
}, err);

//接收拦截器
request.interceptors.response.use((response) => {
  vue.$nextTick(() => {
    // 以服务的方式调用的 Loading 需要异步关闭
    loadingInstance.close();
  });
  const res = response.data;
  if (res.code !== 0 && res.code !== 200) {
    Message(res.message || res.msg);
    if (res.code === 401 || res.code === 403 || res.code === 999) {
      Message("请登录");
    }
    return Promise.reject([res, null]);
  } else {
    return [null, res];
  }
}, err);
export default request;
