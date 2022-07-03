import './index.css';

import { Button, Checkbox, Form, Input } from 'antd';
/*
 * @Author: KristenZheng kristen@electracharger.com
 * @Date: 2022-06-29 10:12:54
 * @LastEditors: KristenZheng kristen@electracharger.com
 * @LastEditTime: 2022-07-03 11:22:22
 * @FilePath: /demo/src/pages/login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';

type loginFrom = {
  username: string;
  password: string;
};

const Login: React.FC = (props) => {
  const [form] = Form.useForm();
  const handleLogin = () => {
    form.validateFields().then((values: loginFrom[]) => {
      doLogin(values);
    });
  };
  const doLogin = (values: loginFrom[]) => {
    console.log('do ajax thing');
  };
  return (
    <div className='lu-login-bg'>
      <div className='lu-login-cover'></div>
      <div className='lu-login-bg-img' />
      <div className='lu-login-cont'>
        <img
          className='lu-login-logo'
          src={require('../../assets/img/logo.png')}
        />
        <Form
          name='basic'
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete='off'
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className='lu-login-input' placeholder='请输入用户名' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input.Password
              className='lu-login-input'
              placeholder='请输入密码'
            />
          </Form.Item>
        </Form>
        <Button className='lu-login-btn' type='primary' onClick={handleLogin}>
          登录
        </Button>
      </div>
    </div>
  );
};

export default Login;
