import config from '../../config/config';

export const API_ENDPOINTS = {
  USER: {
    ADD_USER: `${config.backendUrl}/api/user/add`,
    DELETE_USER: `${config.backendUrl}/api/user/delete`,
    MODIFY_USER: `${config.backendUrl}/api/user/update`,
    GET_USER_DETAIL: `${config.backendUrl}/api/user/detail`,
    QUERY_USER_LIST: `${config.backendUrl}/api/user/list`,

    USER_DOWNLOAD_EXCEL: `${config.backendUrl}/api/user/download`,
    MODIFY_USER_STATUS: `${config.backendUrl}api/user/modifyUserStatus`,

    LOGIN_ACCOUNT: `${config.backendUrl}api/user/login/account`,
    LOGOUT: `${config.backendUrl}api/user/logout`,
    PERMISSION: `${config.backendUrl}api/user/getUserPermissions`,

    // DELETE_USER: (userId: string) => `/api/v1/user/${userId}`,
  },
  POST: {
    ADD_POST: `${config.backendUrl}/api/post/add`,
    DELETE_POST: `${config.backendUrl}/api/post/delete`,
    MODIFY_POST: `${config.backendUrl}/api/post/update`,
    GET_POST_DETAIL: `${config.backendUrl}/api/post/detail`,
    QUERY_POST_LIST: `${config.backendUrl}/api/post/list`,

    POST_DOWNLOAD_EXCEL: `${config.backendUrl}/api/post/download`,
    MODIFY_POST_STATUS: `api/post/modifyPostStatus`,
  },
  ROLE: {
    ADD_ROLE: `${config.backendUrl}/api/role/add`,
    DELETE_ROLE: `${config.backendUrl}/api/role/delete`,
    MODIFY_ROLE: `${config.backendUrl}/api/role/update`,
    GET_ROLE_DETAIL: `${config.backendUrl}/api/role/detail`,
    QUERY_ROLE_LIST: `${config.backendUrl}/api/role/list`,
    QUERY_ROLE_DROPDOWN: `${config.backendUrl}/api/role/dropdown`,

    ROLE_DOWNLOAD_EXCEL: `${config.backendUrl}/api/role/download`,
    MODIFY_ROLE_STATUS: `api/role/modifyRoleStatus`,
  },
  DEPT: {
    ADD_DEPT: `${config.backendUrl}/api/dept/add`,
    DELETE_DEPT: `${config.backendUrl}/api/dept/delete`,
    MODIFY_DEPT: `${config.backendUrl}/api/dept/update`,
    GET_DEPT_DETAIL: `${config.backendUrl}/api/dept/detail`,
    QUERY_DEPT_TREE: `${config.backendUrl}/api/dept/tree`,
    QUERY_DEPT_TREE_TABLE: `${config.backendUrl}/api/dept/treeTable`,

    DEPT_DOWNLOAD_EXCEL: `${config.backendUrl}/api/dept/download`,
    MODIFY_DEPT_STATUS: `api/dept/modifyDeptStatus`,
  },
  MENU: {
    ADD_MENU: `${config.backendUrl}/api/menu/add`,
    DELETE_MENU: `${config.backendUrl}/api/menu/delete`,
    MODIFY_MENU: `${config.backendUrl}/api/menu/update`,
    GET_MENU_DETAIL: `${config.backendUrl}/api/menu/detail`,
    QUERY_MENU_TREE: `${config.backendUrl}/api/menu/tree`,
    QUERY_MENU_TREE_TABLE: `${config.backendUrl}/api/menu/treeTable`,

    MENU_DOWNLOAD_EXCEL: `${config.backendUrl}/api/menu/download`,
    MODIFY_MENU_STATUS: `${config.backendUrl}/api/menu/modifyDeptStatus`,
  },

  //其他模块的API路径
};
