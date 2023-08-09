const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    pjt_no: '@integer(1000, 9999)',
    pjt_nm: '@sentence(10, 20)',
    pm: '@name',
    'pjt_sts_cd|1': ['NEW', 'ACTIVE', 'COMPLETED'],
    pjt_str_dt: '@date',
    pjt_end_dt: '@date',
    pjt_imp_cd: '@integer(0, 5)',
    pjt_budget: '@integer(0, 999999)'
  }]
})

module.exports = [
  {
    url: '/goldstrongXXXI.github.io/project/list',
    type: 'get',
    response: config => {
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
