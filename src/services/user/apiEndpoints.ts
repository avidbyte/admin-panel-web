// src/services/user/apiEndpoints.ts
import config from '../../../config/config';

export const USER_API_ENDPOINTS = {
  QUERY_USER_PAGE: `${config.backendUrl}/api/user/page`,
  ADD_USER: `${config.backendUrl}/api/user/add`,
  DELETE_USER: `${config.backendUrl}/api/user/delete`,
  MODIFY_USER: `${config.backendUrl}/api/user/update`,
  GET_USER_DETAIL: `${config.backendUrl}/api/user/detail`,
  USER_DOWNLOAD_EXCEL: `${config.backendUrl}/api/user/download`,
  MODIFY_USER_STATUS: `${config.backendUrl}/api/user/modifyUserStatus`,
  LOGIN_ACCOUNT: `${config.backendUrl}/api/user/login/account`,
  LOGOUT: `${config.backendUrl}/api/user/logout`,
  PERMISSION: `${config.backendUrl}/api/user/getUserPermissions`,
};
