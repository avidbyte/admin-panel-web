// src/utils/request.ts
import { useNavigate } from '@umijs/max'; // 替换 history 为 useNavigate
import { message } from 'antd';
import { extend } from 'umi-request';

const request = extend({
  errorHandler: (error) => {
    throw error;
  },
});

request.interceptors.request.use((url, options) => {
  const token = localStorage.getItem('token');
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return { url, options };
});

request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  if (data.code === 'A0301') {
    message.error('登录失效，请重新登录');
    localStorage.removeItem('token');
    const navigate = useNavigate(); // 使用 useNavigate 进行路由跳转
    navigate('/login');
  }
  return response;
});

export default request;
