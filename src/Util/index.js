// 抽像 Reducers 生成器
export function reducerCreators (initialState, actionTypeMapList) {
  return (state = initialState, action) => {
    // 校验
    const reducerInstance = typeof actionTypeMapList === 'object' && actionTypeMapList[action.type] ? actionTypeMapList[action.type](state, action.payload ? action.payload : {}, action.params) : state;
    return reducerInstance;
  };
}
// reuducer 中抽离 params的版本
// export function reducerCreators (initialState, actionTypeMapList) {
//   return (state = initialState, action) => {
//     // 校验
//     const reducerInstance = typeof actionTypeMapList === 'object' && actionTypeMapList[action.type] ? actionTypeMapList[action.type](state, action) : state;
//     return reducerInstance;
//   };
// }
export const setCookie = (name,value,path) => {
  var Days = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*24*3600*1000);
  document.cookie = name + "="+ encodeURIComponent (value) + ";expires=" + exp.toGMTString() + ';path='+ path;
}
export const getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
export const delCookie = ($name) => {
    var myDate=new Date();
    myDate.setTime(-1000);//设置时间
    document.cookie=$name+"=''; expires="+myDate.toGMTString()+';path=/';
}
export const delAllCookie = () => {
    var myDate=new Date();
    myDate.setTime(-1000);//设置时间
    var data=document.cookie;
    var dataArray=data.split("; ");
    for(var i=0;i<dataArray.length;i++){
         var varName=dataArray[i].split("=");
         document.cookie=varName[0]+"=''; expires="+myDate.toGMTString()+';path=/login';
    }
}
