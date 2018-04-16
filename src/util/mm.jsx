import { resolve } from "path";

class MUtil{
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || "",
        dataType: param.dataType || 'json',
        data : param.data || null,
        success: res=> {
          if(0 === res.status) {
           typeof resolve === "function" && resolve(res.data, res.msg)
          }
          // 需要强制登录
          else if(10 === res.status){
            this.doLogin() 
          }
          else{
            typeof reject === 'function' && reject(res.msg || res.data)
          }
        },
        error: err =>{
          typeof reject === 'function' && reject(err.statusText)
        }
      })      
    })

  }
  doLogin () {
    window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)
  }
  // 获取url参数
  getUrlParam (name) {
    let queryString = window.location.search.split('?')[1] || '',
        reg = new RegExp("(^|&)" +name + "=([^&]*)(&|$)"),
        result = queryString.match(reg);
    return result ? decodeURIComponent(result[2]) :null;
  }
  errorTips (errorMsg) {
    alert(errorMsg || '好像出错了')
  }
  setStorage(name, data) {
    let dataType = typeof data;
    // 存储对象
    if(dataType === 'object') {
      window.localStorage.setItem(name, JSON.stringify(data))
    }
    // 存储基础类型
    else if(['string', 'number', 'boolean'].indexOf(dataType) >= 0) {
      window.localStorage.setItem(name, data)
    }
    // 不能存储的类型
    else{
      alert('该类型不能用于存储！')
    }
  }
  getStorage(name) {
    let data = window.localStorage.getItem(name)
    if(data) {
      return JSON.parse(data)
    }else {
      return '';
    }
  }
  removeStorage(name) {
    window.localStorage.removeItem(name)
  }
}
export default MUtil;