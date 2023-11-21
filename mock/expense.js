const Mock = require('mockjs')

const data = Mock.mock({
  expense: [
    {
      id: '@increment(1)',
      'account|1': [
        { account_code: '1001', account_name: '加班费' },
        { account_code: '1002', account_name: '会餐费' },
        { account_code: '1003', account_name: '出差费' },
        { account_code: '1004', account_name: '书籍费' },
        { account_code: '1005', account_name: '管理费' }
      ],
      '202201': '@integer(0, 99999)',
      '202202': '@integer(0, 99999)',
      '202205': '@integer(0, 99999)',
      '202206': '@integer(0, 99999)',
      '202209': '@integer(0, 99999)',
      '202211': '@integer(0, 99999)',
      '202212': '@integer(0, 99999)',
      '202301': '@integer(0, 99999)',
      '202302': '@integer(0, 99999)',
      '202305': '@integer(0, 99999)',
      '202306': '@integer(0, 99999)',
      '202309': '@integer(0, 99999)',
      '202311': '@integer(0, 99999)',
      '202312': '@integer(0, 99999)'
      // daily: [
      //   { name: '202201', value: '@integer(0, 99999)' },
      //   { name: '202202', value: '@integer(0, 99999)' },
      //   { name: '202205', value: '@integer(0, 99999)' },
      //   { name: '202206', value: '@integer(0, 99999)' },
      //   { name: '202209', value: '@integer(0, 99999)' },
      //   { name: '202211', value: '@integer(0, 99999)' },
      //   { name: '202212', value: '@integer(0, 99999)' },
      //   { name: '202301', value: '@integer(0, 99999)' },
      //   { name: '202302', value: '@integer(0, 99999)' },
      //   { name: '202305', value: '@integer(0, 99999)' },
      //   { name: '202306', value: '@integer(0, 99999)' },
      //   { name: '202309', value: '@integer(0, 99999)' },
      //   { name: '202311', value: '@integer(0, 99999)' },
      //   { name: '202312', value: '@integer(0, 99999)' }
      // ]
    }
  ],
  dailyColumns: [
    '202301',
    '202302',
    '202303',
    '202304',
    '202305',
    '202306',
    '202307',
    '202308',
    '202309',
    '202310',
    '202311',
    '202312'
  ],
  'acounts|6': [
    {
      account_code: '@increment(1)',
      'account_name|1': ['加班费', '会餐费', '出差费', '书籍费', '管理费']
    }
  ]
})

module.exports = [
  {
    url: '/goldstrongXXXI.github.io/expense/list',
    type: 'get',
    response: config => {
      const expense = data.expense
      return {
        code: 20000,
        data: {
          total: expense.length,
          items: expense
        }
      }
    }
  },
  {
    url: '/goldstrongXXXI.github.io/acounts/list',
    type: 'get',
    response: config => {
      const acounts = data.acounts
      return {
        code: 20000,
        data: {
          total: acounts.length,
          items: acounts
        }
      }
    }
  },
  {
    url: '/goldstrongXXXI.github.io/dailyColumns/list',
    type: 'get',
    response: config => {
      const dailyColumns = data.dailyColumns
      return {
        code: 20000,
        data: {
          total: dailyColumns.length,
          items: dailyColumns
        }
      }
    }
  }
]
