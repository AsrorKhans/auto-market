import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import getCatalogList from '@pages/catalog';
import { MainLayout } from '@shared/ui/layout/main-layout';
import GetList from '@pages/catalog/get-list';
import { LoadingAnimation } from '@shared/components/spinner';
import {
  ADMIN_ROUTES,
  AUTH_ROUTES,
  PAGE_ROUTES,
} from '@shared/constants/route-constants.ts';

const Login = lazy(() => import('@pages/auth/login'));
const SignIn = lazy(() => import('@pages/auth/sign-in'));
const SignUp = lazy(() => import('@pages/auth/sign-up'));
const AdminDashboard = lazy(() => import('@pages/admin-dashboard'));
const Calculation = lazy(() => import('@pages/calculation'));
const UpdatePrices = lazy(() => import('@pages/update-prices'));
const NotFound = lazy(() => import('@pages/not-found'));

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <Routes>
        <Route path={AUTH_ROUTES.AUTH}>
          <Route index element={<Login />} />
          <Route path={AUTH_ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={AUTH_ROUTES.SIGN_UP} element={<SignUp />} />
        </Route>
        <Route path={ADMIN_ROUTES.ADMIN}>
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path={PAGE_ROUTES.MAIN} element={<MainLayout />}>
          <Route index element={<GetList />} />
          <Route>{getCatalogList()}</Route>
          <Route path={'calculation'}>
            <Route path={''} element={<Calculation />} />
          </Route>
          <Route path={PAGE_ROUTES.UPDATE_PRICE}>
            <Route path={''} element={<UpdatePrices />} />
          </Route>
        </Route>
        <Route path={PAGE_ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
