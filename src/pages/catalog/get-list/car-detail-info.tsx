import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePriceListStore } from '@shared/store/update-price';
import { ICars } from '@shared/types/ICars.ts';
import { Card } from 'antd';

const CarDetailInfo = () => {
  const params = useParams();
  const bankList = usePriceListStore.getState().bankList;
  const [carsDetailData, setCarDetailData] = useState<ICars>();

  useEffect(() => {
    let allCars: ICars[] = [];
    bankList.map((item) => (allCars = [...item.cars]));
    setCarDetailData(allCars.find((item) => item.id === Number(params.id)));
  }, []);
  console.log('params', params);
  console.log('carsDetailData', carsDetailData);
  return (
    <>
      {bankList.map((item, index) => {
        const allCars = [...item.cars];
        const carDetailInfo = allCars.find(
          (item) => item.id === Number(params.id)!
        );
        return (
          <Card key={index} title={''} style={{ width: 300 }} hoverable>
            <ul>
              <li>Бренд: {carDetailInfo!.id}</li>
              <li>Бренд: {carDetailInfo!.brandName}</li>
              <li>Бренд: {carDetailInfo!.name}</li>
              <li>Бренд: {carDetailInfo!.name}</li>
              <li>Бренд: {carDetailInfo!.price}</li>
              <li>Бренд: {carDetailInfo!.year}</li>
            </ul>
          </Card>
        );
      })}
    </>
  );
};
export default CarDetailInfo;
