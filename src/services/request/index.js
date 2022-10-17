import axios from "axios";
import {BASE_URL, TIMEOUT} from "@/services/request/config";

class axiosRequest {
  constructor(baseURL, timeout= 10000) {
    this.instance = axios.create({baseURL, timeout})
    // 响应拦截
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({...config, method: "get"})
  }
  post(config) {
    return this.request({...config, method: "post"})
  }
}

export default new axiosRequest(BASE_URL, TIMEOUT)
