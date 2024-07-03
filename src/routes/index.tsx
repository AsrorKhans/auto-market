import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import getCatalogList from '@pages/catalog';
import { MainLayout } from '@shared/ui/layout/main-layout';
import GetList from '@pages/catalog/get-list';

const Login = lazy(() => import('@pages/auth/login'));
const SignIn = lazy(() => import('@pages/auth/sign-in'));
const SignUp = lazy(() => import('@pages/auth/sign-up'));
const AdminDashboard = lazy(() => import('@pages/admin-dashboard'));
const Calculation = lazy(() => import('@pages/calculation'));
const UpdatePrices = lazy(() => import('@pages/update-prices'));
const NotFound = lazy(() => import('@pages/not-found'));

function AppRoutes() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path={'auth'}>
          <Route index element={<Login />} />
          <Route path={'sign-in'} element={<SignIn />} />
          <Route path={'sign-up'} element={<SignUp />} />
        </Route>
        <Route path={'admin'}>
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<GetList />} />
          <Route>{getCatalogList()}</Route>
          <Route path={'calculation'}>
            <Route path={''} element={<Calculation />} />
          </Route>
          <Route path={'update-prices'}>
            <Route path={''} element={<UpdatePrices />} />
          </Route>
        </Route>
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
