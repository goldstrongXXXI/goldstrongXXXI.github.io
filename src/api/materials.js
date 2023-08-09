import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/goldstrongXXXI.github.io/materials/list',
    method: 'get',
    params
  })
}
