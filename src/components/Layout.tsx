import React, { useState } from 'react';
import { ReadOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    ): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
 }

const items: MenuItem[] = [
  getItem('React', 'react', <ReadOutlined />, [
    getItem('Installation', 'react-install'),
    getItem('Setup', 'react-setup'),
    getItem('Components', 'react-components'),
  ]),
  getItem('Node js', 'node', <ReadOutlined />, [
    getItem('Basics', 'node-basics'),
    getItem('Modules', 'node-modules'),
  ]),
];

const PageLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>('react-install');

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (selectedKey) {
      case 'react-install':
        return <p><b>React Installation:</b></p>;
      case 'react-setup':
        return <p><b>React Setup:</b></p>;
      case 'react-components':
        return <p><b>React Components:</b></p>;
      case 'node-basics':
        return <p><b>Node.js Basics:</b></p>;
      case 'node-modules':
        return <p><b>Node Modules:</b></p>;
      default:
        return <p></p>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }} className='pt-[80px]'>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ background: colorBgContainer }}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          defaultSelectedKeys={[selectedKey]}
          mode="inline"
          items={items}
          onClick={({ key }) => setSelectedKey(key)}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Tutorials' }, { title: selectedKey }]} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Logicoding
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PageLayout;