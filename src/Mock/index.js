import Mock from 'mockjs';

var temp = {
  "user|1-3": [{
    'name': '@cname',
    'id': 88
  }
  ]
};

const template = (options) => {

  return Mock.mock(temp);
}

Mock.setup({
    timeout: 400
})

Mock.mock(/\/suspend\//, template);
