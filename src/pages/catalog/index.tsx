import { Route } from 'react-router-dom';
import { lazy } from 'react';

const CarDetailInfo = lazy(() => import('./get-list/car-detail-info'));

export default () => {
  return (
    <Route path={'/catalog'}>
      <Route path={':id'} element={<CarDetailInfo />} />
    </Route>
  );
};
