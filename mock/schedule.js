const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: '@name',
    display_time: '@datetime',
    // pageviews: '@integer(300, 5000)',
    // 'type|1': ['Work', 'Study', 'Game'],
    work: '@integer(0, 24)',
    study: '@integer(0, 24)',
    game: '@integer(0, 24)',
    rest: '@integer(0, 24)',
    pie_date: '@DATETIME("2023-07-dd")',
    // graphics: { 'pie_date': '@DATETIME("2023-06-dd")', 'work': '@integer(0, 24)', 'study': '@integer(0, 24)', 'game': '@integer(0, 24)', 'rest': '@integer(0, 24)' },
    // work_hour: '@integer(0, 24)',
    importance: '@integer(0, 5)'
  }]
})

module.exports = [
  {
    url: '/goldstrongXXXI.github.io/schedule/list',
    type: 'get',
    response: config => {
      console.log('config1 >>>', config)
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/goldstrongXXXI.github.io/schedule/grpList',
    type: 'post',
    response: config => {
      console.log('config2 >>>', config)
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
