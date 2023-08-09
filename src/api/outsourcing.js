import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/goldstrongXXXI.github.io/outsourcing/list',
    method: 'get',
    params
  })
}
