/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import request from '@/utils/request';
import { USER_API_ENDPOINTS } from './apiEndpoints';

/**
 * 获取用户列表
 * @param params 查询参数
 * @param options 请求选项
 */
export async function queryUserList(
  params: {
    keyword?: string;
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>(
    USER_API_ENDPOINTS.QUERY_USER_PAGE,
    {
      method: 'GET',
      params,
      ...options,
    },
  );
}

/**
 * 添加用户
 * @param body 用户信息
 * @param options 请求选项
 */
export async function addUser(
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(USER_API_ENDPOINTS.ADD_USER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: body,
    ...options,
  });
}

/**
 * 获取用户详情
 * @param params 包含 userId 的参数
 * @param options 请求选项
 */
export async function getUserDetail(
  params: { userId: string },
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(
    `${USER_API_ENDPOINTS.GET_USER_DETAIL}/${params.userId}`,
    {
      method: 'GET',
      ...options,
    },
  );
}

/**
 * 修改用户信息
 * @param params 包含 userId 的参数
 * @param body 用户信息
 * @param options 请求选项
 */
export async function modifyUser(
  params: { userId: string },
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>(
    `${USER_API_ENDPOINTS.MODIFY_USER}/${params.userId}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: body,
      ...options,
    },
  );
}

/**
 * 删除用户
 * @param params 包含 userId 的参数
 * @param options 请求选项
 */
export async function deleteUser(
  params: { userId: string },
  options?: { [key: string]: any },
) {
  return request<API.Result_string_>(
    `${USER_API_ENDPOINTS.DELETE_USER}/${params.userId}`,
    {
      method: 'DELETE',
      ...options,
    },
  );
}

/**
 * 登录
 * @param body 用户名密码
 * @param options 请求选项
 */
export async function accountLogin(
  body?: API.UserLogin,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserLogin_>(`${USER_API_ENDPOINTS.LOGIN_ACCOUNT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: body,
    ...options,
  });
}
