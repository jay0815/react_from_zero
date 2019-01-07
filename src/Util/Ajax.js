/**
 * [原生js Ajax Demo]
 * @param {String}  [method='GET'] [请求方式]
 * @param {Boolean} [async=false]  [是否为同步请求]
 * @param {String}  url            [请求地址]
 * @param {Object}  param          [参数]
 * @param {Object}  formData       [表单数据]
 * @return {Promise} Promise 返回一个promise对象
 */
export const Ajax = ({
  header = '',
  method = 'GET',
  async = true,
  url,
  param,
  formData
}) => new Promise((resolve, reject) => {
  let xhr = null;
  let responseText = '';
  if(window.XMLHttpRequest){ // ie7 以下是没有 XMLHttpRequest，所以以此判断 浏览器版本
    xhr = new XMLHttpRequest();
  }else { // ie 5 he ie 6 ，此处不再考虑 ie 4及以下版本，GG simida
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if(xhr){
    if(url){
      let paramString = '';
      for(let info in param){
        if(paramString != ''){
          paramString = info + '=' + param[info] + '&' + paramString;
        }else{
          paramString = info + '=' + param[info]
        }
      }
      if(paramString != ''){
        url = url + '?' + paramString
      }
      xhr.open(method.toUpperCase(),url,async);
      if(header != ''){
        for(let info in header){
          xhr.setRequestHeader(info,header[info])
        }
      }
      xhr.onreadystatechange = () => {
        responseHandle(method,xhr,resolve,reject)
      }
      xhr.send(formData);
      // xhr.addEventListener('readystatechange',function(e){
      //     if(xhr.readyState === 4) {
      //         if(xhr.status === '200') {
      //             resolve(xhr.responseText);
      //         } else {
      //             reject(xhr);
      //         }
      //     }
      // });
      }
    }
})
/**
 *
 * @param  {[type]} method [请求方式]
 * @param  {[type]} xhr    [XMLHttpRequest]
 */
/**
 * 返回对象解析
 * @param  {[String]} method  [请求方式]
 * @param  {[Object]} xhr  [XMLHttpRequest]
 * @param  {[function]} resolve [成功状态下的调用]
 * @param  {[function]} reject  [失败状态下的调用]
 */
const responseHandle = ( method, xhr, resolve, reject ) => {
  if(method.toUpperCase() === 'GET'){
    if(xhr.status === 200){
      if(xhr.responseText != ''){
        resolve(JSON.parse(xhr.responseText),xhr)
      }
    }else{
      let resJson = { code: xhr.status, response: xhr.response }
      reject(resJson, xhr)
    }
  }
  if(method.toUpperCase() === 'POST'){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        if(xhr.responseText != ''){
          resolve(xhr.responseText,xhr)
        }
      }else{
        let resJson = { code: xhr.status, response: xhr.response }
        reject(resJson, xhr)
      }
    }
  }
}
