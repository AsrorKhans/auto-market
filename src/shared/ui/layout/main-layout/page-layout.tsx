import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

export const PageLayout = () => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider width="25%"></Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};
