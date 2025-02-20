/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API {
  interface PageInfo {
    /**
         1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<Record<string, any>>;
  }

  interface PageInfo_UserInfo_ {
    /**
         1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<UserInfo>;
  }

  interface Result {
    success?: boolean;
    errorMessage?: string;
    data?: Record<string, any>;
  }

  interface Result_PageInfo_UserInfo__ {
    success?: boolean;
    errorMessage?: string;
    data?: PageInfo_UserInfo_;
  }

  interface Result_UserInfo_ {
    success?: boolean;
    errorMessage?: string;
    data?: UserInfo;
  }

  interface Result_string_ {
    success?: boolean;
    errorMessage?: string;
    data?: string;
  }

  type UserGenderEnum = 'MALE' | 'FEMALE';

  interface UserInfo {
    id?: string;
    username?: string;
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
    gender?: UserGenderEnum;
  }

  interface UserInfoVO {
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
  }

  interface UserLogin {
    username?: string;
    password?: string;
  }

  interface Result_UserLogin_ {
    code?: string;
    message?: string;
    data?: UserLoginInfo;
  }

  interface UserLoginInfo {
    tokenName?: string;
    tokenValue?: string;
    isLogin?: boolean;
    loginId?: string;
    loginType?: string;
    tokenTimeout?: number;
    sessionTimeout?: number;
    tokenSessionTimeout?: number;
    tokenActiveTimeout?: number;
    loginDevice?: string;
    tag?: string;
  }

  type definitions_0 = null;
}
