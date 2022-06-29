import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {
  DesktopOutlined,
  PartitionOutlined,
  GiftOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './index.css';
const { Sider, Header, Content, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items = [
  getItem('首页', 'dashboard', <DesktopOutlined />),
  getItem('品类管理', 'category', <PartitionOutlined />, [
    getItem('品类列表', 'categoryList'),
  ]),
  getItem('产品管理', 'product', <GiftOutlined />, [
    getItem('产品列表', 'productList'),
  ]),
];

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        id='lu-layout-side'
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <img className='logo' src={require('../assets/img/logo.png')} />
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}
          >
            Sister is a cat
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          LuJunYao CMS @2022 Created by Kristen
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
