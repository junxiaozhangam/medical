import axios from 'axios'
const MyHttpServer={}
MyHttpServer.install=(Vue)=>{
   axios.defaults.baseURL='http://localhost:8989/medical/api'
   // 为 axios 挂载 token 请求头，需要使用 request 拦截器实现
    axios.interceptors.request.use(function(config) {
    // 手动为 axios 的请求，追加 Authorization 请求头
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  })
    axios.defaults.withCredentials = true
    Vue.prototype.$http=axios
}
export default MyHttpServer