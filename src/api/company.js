import request from '@/utils/request'

export function getCompanyList(params) {
  return request({
    url: '/goldstrongXXXI.github.io/companies/list',
    method: 'get',
    params
  })
}

export function getPeopleList(params) {
  return request({
    url: '/goldstrongXXXI.github.io/people/list',
    method: 'get',
    params
  })
}
