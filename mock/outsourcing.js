const Mock = require('mockjs')

const data = Mock.mock({
  'outsourcings|30': [
    {
      id: '@increment(1)',
      person: {
        emp_id: '@increment(1)',
        name: '@cname',
        'age|11-99': 1,
        'gender|1': ['男', '女'],
        address: '@county(true)',
        birthday: '@date',
        email: '@email'
      },
      company: {
        company_id: '@increment(1)',
        name: '@word',
        'rate|1': ['S', 'A', 'B', 'C', 'D', 'E'],
        foreign_yn: '@boolean',
        email: '@email',
        address: '@county(true)'
      },
      'pos_cd|1': ['intern', 'staff', 'director', 'manager', 'chief', 'ceo'],
      'apr_cd|1': ['new', 'waiting', 'approved', 'cancel'],
      iv_str_dt: '@date',
      iv_end_dt: '@date',
      work_day: '@float(0, 365, 0, 1)',
      unit: '@integer(0, 99999)',
      exchange_rate: '@float(0, 9, 0, 2)'
    }
  ]
})

module.exports = [
  {
    url: '/goldstrongXXXI.github.io/outsourcing/list',
    type: 'get',
    response: config => {
      const outsourcings = data.outsourcings
      return {
        code: 20000,
        data: {
          total: outsourcings.length,
          items: outsourcings
        }
      }
    }
  }
]
