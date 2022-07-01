import './index.css';

import { Button, Checkbox, Form, Input } from 'antd';
/*
 * @Author: KristenZheng kristen@electracharger.com
 * @Date: 2022-06-29 10:12:54
 * @LastEditors: KristenZheng kristen@electracharger.com
 * @LastEditTime: 2022-07-01 18:39:44
 * @FilePath: /demo/src/pages/login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, toggleChecked] = useState(false);
  const onFinish = (val: any) => {};
  const onFinishFailed = (val: any) => {};
  const handleLogin = () => {};
  return (
    <div className='lu-login-bg'>
      <img
        className='lu-login-bg-img'
        src={require('../../assets/img/bg.jpg')}
      />
      <div className='lu-login-cont'>
        <img
          className='lu-login-logo'
          src={require('../../assets/img/logo.png')}
        />
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              className='lu-login-input'
              placeholder='请输入用户名'
              value={userName}
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input.Password
              className='lu-login-input'
              placeholder='请输入密码'
              value={password}
            />
          </Form.Item>
          {/* <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox value={checked}>Remember me</Checkbox>
          </Form.Item> */}
        </Form>
        <Button className='lu-login-btn' type='primary' onClick={handleLogin}>
          登录
        </Button>
      </div>
    </div>
  );
};

export default Login;
