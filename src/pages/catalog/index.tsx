import { Route } from 'react-router-dom';
import { lazy } from 'react';
import { PAGE_ROUTES } from '@shared/constants/route-constants.ts';

const CarDetailInfo = lazy(() => import('./get-list/car-detail-info'));

export default () => {
  return (
    <Route path={PAGE_ROUTES.CATALOG}>
      <Route path={':id'} element={<CarDetailInfo />} />
    </Route>
  );
};
