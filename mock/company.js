const Mock = require('mockjs')

const data = Mock.mock({
  'companies|10': [
    {
      company_id: '@increment(1)',
      name: '@word',
      'rate|1': ['S', 'A', 'B', 'C', 'D', 'E'],
      foreign_yn: '@boolean',
      email: '@email',
      address: '@county(true)'
    }
  ],
  'people|20': [
    {
      emp_id: '@increment(1)',
      name: '@cname',
      'age|11-99': 1,
      'gender|1': ['男', '女'],
      address: '@county(true)',
      birthday: '@date',
      email: '@email',
      isInputed: '@boolean'
    }
  ]
})

module.exports = [
  {
    url: '/goldstrongXXXI.github.io/companies/list',
    type: 'get',
    response: config => {
      const companies = data.companies
      return {
        code: 20000,
        data: {
          total: companies.length,
          items: companies
        }
      }
    }
  },
  {
    url: '/goldstrongXXXI.github.io/people/list',
    type: 'get',
    response: config => {
      const people = data.people
      return {
        code: 20000,
        data: {
          total: people.length,
          items: people
        }
      }
    }
  }
]
