import { useNavigate } from '@umijs/max'; // 替换 useHistory 为 useNavigate
import { Button, Form, Input, message } from 'antd';
import React from 'react';
import request from 'umi-request';

const Login: React.FC = () => {
  const navigate = useNavigate(); // 替换 useHistory 为 useNavigate

  const login = async (params: { username: string; password: string }) => {
    console.log('Sending login request with params:', params); // 添加日志
    return request('/api/login', {
      method: 'POST',
      data: params,
    });
  };

  const onFinish = async (values: { username: string; password: string }) => {
    try {
      const response = await login(values);
      console.log('Login response:', response); // 添加日志
      if (response.success) {
        message.success('登录成功');
        navigate('/'); // 替换 history.push 为 navigate
      } else {
        message.error('登录失败，请检查账号和密码');
      }
    } catch (error) {
      console.error('Login error:', error); // 添加日志
      message.error('登录失败，请重试');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
