import services from '@/services/user';
import { useNavigate } from '@umijs/max'; // 替换 useHistory 为 useNavigate
import { Button, Form, Input, message } from 'antd';
import React from 'react';

const { accountLogin } = services.UserController;

const Login: React.FC = () => {
  const navigate = useNavigate(); // 替换 useHistory 为 useNavigate

  const onFinish = async (values: { username: string; password: string }) => {
    try {
      const response = await accountLogin(values);
      console.log('Login response:', response); // 添加日志
      if (response.code === '00000') {
        localStorage.setItem('token', response.data?.tokenValue as string);
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
