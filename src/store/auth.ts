/**
 * @file Auth store
 *
 */

import { Base64 } from 'js-base64'
import { Auth } from '@/constants/auth'
import nodepress from '@/services/nodepress'

export const AUTH_API_PATH = {
  AUTH: '/auth',
  LOGIN: '/auth/login',
  CHECK_TOKEN: '/auth/check',
  RENEWAL_TOKEN: '/auth/renewal',
  ADMIN: '/auth/admin',
}

/** 获取管理员信息 */
export function getAdminInfo() {
  return nodepress.get<Auth>(AUTH_API_PATH.ADMIN).then((response) => response.result)
}

/** 更新管理员信息（包括平台密码） */
export function putAuth(auth: Auth) {
  return nodepress
    .put<Auth>(AUTH_API_PATH.ADMIN, {
      ...auth,
      password: auth.password ? Base64.encode(auth.password) : '',
      new_password: auth.new_password ? Base64.encode(auth.new_password) : '',
    })
    .then((response) => response.result)
}

/** 检查 Token 有效性 */
export function checkTokenValidity() {
  return nodepress.post<void>(AUTH_API_PATH.CHECK_TOKEN).then((response) => response.result)
}

export interface TokenResult {
  access_token: string
  expires_in: number
}

/** 登录 */
export function authLogin(password: string) {
  return nodepress
    .post<TokenResult>(AUTH_API_PATH.LOGIN, { password: Base64.encode(password) })
    .then((response) => response.result)
}

/** 续约 Token */
export function renewalToken() {
  return nodepress
    .post<TokenResult>(AUTH_API_PATH.RENEWAL_TOKEN)
    .then((response) => response.result)
}
