import request from '@/utils/request'

export function getExpenseList(params) {
  return request({
    url: '/goldstrongXXXI.github.io/expense/list',
    method: 'get',
    params
  })
}

export function getAccountsList(params) {
  return request({
    url: '/goldstrongXXXI.github.io/acounts/list',
    method: 'get',
    params
  })
}

export function getDailyColumnsList(params) {
  return request({
    url: '/goldstrongXXXI.github.io/dailyColumns/list',
    method: 'get',
    params
  })
}

