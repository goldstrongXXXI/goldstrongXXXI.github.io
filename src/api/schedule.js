import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/goldstrongXXXI.github.io/schedule/list',
    method: 'get',
    params
  })
}

export function getGrpList(params) {
  return request({
    url: '/goldstrongXXXI.github.io/schedule/grpList',
    method: 'post',
    params
  })
}
