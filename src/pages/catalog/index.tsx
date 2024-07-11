import { Route } from 'react-router-dom';
import { lazy } from 'react';

const CarDetailInfo = lazy(() => import('./get-list/car-detail-info'));
const CarsCatalogList = lazy(() => import('./get-list'));

export default () => {
  return (
    <Route path={'catalog'}>
      <Route index element={<CarsCatalogList />} />
      <Route path={':id'} element={<CarDetailInfo />} />
    </Route>
  );
};
