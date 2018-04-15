//本Demo遵循 RFC 2616
/**
 * HTTP状态码
 * @type {Object}
 * 1xx 消息
 * 2xx 成功
 * 3xx 重定向
 * 4xx 请求错误
 * 5xx 服务器错误
 */
// DAV资料 https://docs.oracle.com/cd/E19857-01/819-0823/agdav.html
const statusList = {
  100:'Continue', //客户端应当继续发送请求
  101:'Switch Protocol', //切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议
  102:'Processing', //代表处理将被继续执行
  200:'OK', //请求成功
  201:'Created',//已创建。成功请求并创建了新的资源
  202:'Accepted',//已接受。已经接受请求，但未处理完成
  203:'Non-Authoritative Information',//非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本
  204:'No Content',//无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
  205:'Reset Content',//重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域
  206:'Partail Content',//部分内容。服务器成功处理了部分GET请求
  207:'Multi-Status',// 代表之后的消息体将是一个XML消息，并且可能依照之前子请求数量的不同，包含一系列独立的响应代码
  208:'Multi-Status',//一个DAV的绑定成员被前一个请求枚举，并且没有被再一次包括
  226:'IM Used',//服务器已经满足了请求所要的资源，并且响应是一个或者多个实例操作应用于当前实例的结果
  300:'Multiple Choice',//
  301:'Moved Permanently',//
  302:'Found',//
  303:'See Other',//
  304:'Not Modified',//
  305:'Use Proxy',//
  306:'unused',//
  307:'Temporary Redirect',//
  308:'Permanent Redirect',//
  400:'Bad Request',//
  401:'Unauthorized',//
  402:'Payment Required',//
  403:'Forbidden',//
  404:'Not Found',//
  405:'Method Not Allowed',//
  406:'Not Acceptable',//
  407:'Proxy Authentication Required',//
  408:'Request Timeout',//
  409:'Conflict',//
  410:'Gone',//
  411:'Length Required',//
  412:'Precondition Failed',//
  413:'Payload Too Large',//
  414:'URI Too Long',//
  415:'Unsupported Media Type',//
  416:'Requested Range Not Satisfiable',//
  417:'Expectation Failed',//
  418:"I'm a teapot",//
  421:'Misdirected Request',//
  422:'Unprocessable Entity',//
  423:'Locked',//
  424:'Failed Dependency',//
  426:'Upgrade Required',//
  428:'Precondition Required',//
  429:'Too Many Requests',//
  431:'Request Header Fields Too Large',//
  451:'Unavailable For Legal Reasons', //
  500:'Internal Server Error', //
  501:'Not Implemented', //
  502:'Bad Gateway', //
  503:'Service Unavailable', //
  504:'Gateway Timeout', //
  505:'HTTP Version Not Supported', //
  506:'Variant Also Negotiates', //
  507:'Insufficient Storage', //
  508:'Loop Detected', //
  510:'Not Extended', //
  511:'Network Authentication Required'//
};
/**
 * [readyStateList description]
 * @type {Array}
 * 0 UNSENT XMLHttpRequest代理已被创建，但尚未调用open()方法。
 * 1 OPENED open()方法已经被触发。在这个状态中，可以通过setRequestHeader()方法来设置请求的头部，可以调用send()方法来发起请求。
 * 2 HEADERS_RECEIVED send() 方法已经被调用，响应头也已经被接收
 * 3 LOADING 响应体部分正在被接收。如果responseType属性是“text”或空字符串，responseText将会在载入的过程中拥有部分响应数据。
 * 4 DONE 请求操作已经完成。这意味着数据传输已经彻底完成或失败
 */
const readyStateList = [
  '代理(XHR对象)被创建，但尚未调用 open() 方法',
  'open() 方法已经被调用',
  'send() 方法已经被调用，响应头也已经被接收',
  '下载中,responseText 属性已经包含部分数据',
  '下载操作已完成'
];
