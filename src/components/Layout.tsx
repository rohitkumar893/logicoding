import React, { useState } from 'react';
import { ReadOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ReactTutorials from './ReactTutorials';
import NodeTutorials from './NodeTutorials';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
): MenuItem {
  return {
    key,
    icon,
    label,
  } as MenuItem;
}

// ✅ FLAT MENU — no nesting, no arrows
const items: MenuItem[] = [
  getItem('React: Installation', 'react-install', <ReadOutlined />),
  getItem('React: Setup', 'react-setup', <ReadOutlined />),
  getItem('React: Components', 'react-components', <ReadOutlined />),
  getItem('Node.js: Basics', 'node-basics', <ReadOutlined />),
  getItem('Node.js: Modules', 'node-modules', <ReadOutlined />),
];

const PageLayout: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('react-install');

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    if (selectedKey.startsWith('react')) {
      return <ReactTutorials selectedKey={selectedKey} />;
    } else if (selectedKey.startsWith('node')) {
      return <NodeTutorials selectedKey={selectedKey} />;
    } else {
      return <p>Select a topic</p>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }} className="pt-[80px]">
      <Sider style={{ background: colorBgContainer }}>
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
          <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[{ title: 'Tutorials' }, { title: selectedKey }]}
          />
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
      </Layout>
    </Layout>
  );
};

export default PageLayout;
