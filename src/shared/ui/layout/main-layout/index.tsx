import React, { ReactNode } from 'react';

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { HeaderComponent } from 'src/shared/ui/header';
import { FooterComponent } from 'src/shared/ui/footer';

type Props = {
  children: ReactNode | ReactNode[];
};
export const MainLayout = () => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout>
      <HeaderComponent />
      <Content>
        <main className={'main-container'}>
          <Outlet />
        </main>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
