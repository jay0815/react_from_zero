import superagent from 'superagent';

const methods = [
  'get',
  'head',
  'post',
  'put',
  'del',
  'options',
  'patch',
];

export default class Api {
  constructor (opts) {
    this.opts = opts || {};
    if (!this.opts.baseURI) { throw new Error('baseURI option is required'); };
    const _this = this;
    methods.forEach(method => {
      _this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](_this.opts.baseURI + path);
        if (params) {
          request.query(params);
        }
        if (_this.opts.headers) {
          request.set(_this.opts.headers);
        }
        if (data) {
          request.send(data);
        }
        request.end((err, { body, text } = {}) => {
          return err ? reject(body || text || err) : resolve(body || text);
        });
      });
    });
  }
}

// const Api = _Api;
// export default Api;
