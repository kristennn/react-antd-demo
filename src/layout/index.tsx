import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PartitionOutlined,
  GiftOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './index.css';
import Dashboard from '../pages/dashboard';
import Category from '../pages/category';
import Product from '../pages/product';
import Login from '../pages/login';

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

type MenuItemConfig = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  url: string;
  children?: MenuItemConfig[];
};
const items: MenuItemConfig[] = [
  { label: '首页', key: 'dashboard', icon: <DesktopOutlined />, url: '/' },
  {
    label: '品类管理',
    key: 'category',
    url: '/category',
    icon: <PartitionOutlined />,
    children: [
      {
        label: '品类列表',
        key: 'categoryList',
        url: '/category',
      },
    ],
  },
  {
    label: '产品管理',
    key: 'product',
    icon: <GiftOutlined />,
    url: '/product',
    children: [
      {
        label: '产品列表',
        key: 'productList',
        url: '/product',
      },
    ],
  },
];

const renderMenu = (items: MenuItemConfig[]) => {
  return items.map((menuItem: MenuItemConfig) => {
    if (menuItem.children && menuItem.children.length) {
      return (
        <Menu.SubMenu title={menuItem.label} icon={menuItem.icon}>
          {menuItem.children.map((child: MenuItemConfig) => {
            return (
              <Menu.Item key={child.key}>
                {child.icon}
                <span>{child.label}</span>
                <Link to={child.url} />
              </Menu.Item>
            );
          })}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={menuItem.key}>
          {menuItem.icon}
          <span>{menuItem.label}</span>
          <Link to={menuItem.url} />
        </Menu.Item>
      );
    }
  });
};

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Sider
        id='lu-layout-side'
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <img className='logo' src={require('../assets/img/logo.png')} />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          {renderMenu(items)}
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360, margin: '16px 0' }}
          >
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/category' element={<Category />} />
              <Route path='/product' element={<Product />} />
            </Routes>
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
