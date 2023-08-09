const Mock = require('mockjs')

const data = Mock.mock({
  'labors|30': [
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
      // name: '@cname',
      'pos_cd|1': ['intern', 'staff', 'director', 'manager', 'chief', 'ceo'],
      'apr_cd|1': ['new', 'waiting', 'approved', 'cancel'],
      iv_str_dt: '@date',
      iv_end_dt: '@date',
      // birthday: '@date',
      unit: '@integer(0, 99999)',
      work_day: '@float(0, 365, 0, 1)',
      level_cd: '@float(0, 4, 0, 2)',
      pm_yn: false
    }
  ]
})

module.exports = [
  {
    url: '/goldstrongXXXI.github.io/labor/list',
    type: 'get',
    response: config => {
      const labors = data.labors
      return {
        code: 20000,
        data: {
          total: labors.length,
          items: labors
        }
      }
    }
  }
]
