import { Checkbox, Form, Input } from 'antd';

/*
 * @Author: KristenZheng kristen@electracharger.com
 * @Date: 2022-06-29 10:12:54
 * @LastEditors: KristenZheng kristen@electracharger.com
 * @LastEditTime: 2022-06-29 10:41:46
 * @FilePath: /demo/src/pages/login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';

const Login: React.FC = () => {
  const onFinish = (val: any) => {};
  const onFinishFailed = (val: any) => {};
  return (
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
        label='用户名'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='密码'
        name='password'
        rules={[{ required: true, message: 'Please input your password' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name='remember'
        valuePropName='checked'
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default Login;
