
var NetUtil = {};

/**
 * 让fetch也可以timeout
 *  timeout不是请求连接超时的含义，它表示请求的response时间，包括请求的连接、服务器处理及服务器响应回来的时间
 * fetch的timeout即使超时发生了，本次请求也不会被abort丢弃掉，它在后台仍然会发送到服务器端，只是本次请求的响应内容被丢弃而已
 * @param {Promise} fetch_promise    fetch请求返回的Promise
 * @param {number} [timeout=20000]   单位：毫秒，这里设置默认超时时间为20秒
 * @return 返回Promise
 */
function timeout_fetch(fetch_promise,timeout = 10000) {
  let timeout_fn = null; 

  //这是一个可以被reject的promise
  let timeout_promise = new Promise(function(resolve, reject) {
      timeout_fn = function() {
          reject('timeout promise');
      };
  });

  //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
  let abortable_promise = Promise.race([
      fetch_promise,
      timeout_promise
  ]);

  setTimeout(function() {
      timeout_fn();
  }, timeout);

  return abortable_promise ;
}

/**
 * GET请求
 */
NetUtil.get = function(url, params, headers) {
  if (params) {
      let paramsArray = [];
      //encodeURIComponent
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
      if (url.search(/\?/) === -1) {
          url += '?' + paramsArray.join('&')
      } else {
          url += '&' + paramsArray.join('&')
      }
  }
  return new Promise(function (resolve, reject) {
    timeout_fetch(fetch(url, {
          method: 'GET',
          headers: headers,
    }))
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            reject({status:response.status})
        }
    })
    .then((response) => {
        resolve(response);
    })
    .catch((err)=> {
        reject(err);
    })
  })
}

/**
 * POST请求  FormData 表单数据
 * 
 *  let formData = new FormData();  
    formData.append("id",1060);  
    let url='http://www.pintasty.cn/home/homedynamic';
    let  headers='';
    NetUtil.post(url,formData,headers).then((json) => {  
     //处理 请求结果  
    },(json)=>{  
      //TODO 处理请求fail     
    }) 
 * 
 */
NetUtil.post = function(url, formData, headers) {
  return new Promise(function (resolve, reject) {
    timeout_fetch(fetch(url, {
        method: 'POST',
        headers: headers,
        body:formData,
    }))
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            reject({status:response.status})
        }
    })
    .then((response) => {
        resolve(response);
    })
    .catch((err)=> {
        reject(err);
    })
  })
}


export default NetUtil;