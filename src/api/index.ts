import request from '@/utils/http/request'
import { UserListResultModel } from './model/appModel'

enum Api {
  getUserList = '/api/user/list',
}

// 获取用户列表
export function getUserList() {
  return request.get<UserListResultModel>(Api.getUserList)
}
