import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/goldstrongXXXI.github.io/table/list',
    method: 'get',
    params
  })
}
