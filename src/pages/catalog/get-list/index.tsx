import React, { useState } from 'react';
import { Card, Form } from 'antd';
import './styles.scss';
import { useCatalogStore } from '@shared/store/catalog-store';
import { usePriceListStore } from '@shared/store/update-price';
import { ICarsList } from '@shared/types/ICars.ts';
import { Link } from 'react-router-dom';

const GetList: React.FC = () => {
  const { users, setUsers, removeUserById } = useCatalogStore();
  const { bankList } = usePriceListStore();
  const [form] = Form.useForm();
  const [carsList, setCarsList] = useState<ICarsList[]>();
  const onFinish = (values: any) => {
    console.log(values);
    const requestedValue = {
      id: Date.now(),
      ...form.getFieldsValue(),
    };

    setUsers([...users, requestedValue]);
    form.resetFields();
  };

  console.log('carsList', carsList);
  return (
    <>
      <h2>Каталог</h2>
      <div className={'catalog-list-wrapper'}>
        {bankList!.map((item, index) => {
          const cars = [...item.cars];
          return cars.map((car) => (
            <Link to={`${car.id}`} state={{ car }}>
              <Card key={index} title={''} style={{ width: 300 }} hoverable>
                <ul>
                  <li>Бренд: {car.brandName}</li>
                  <li>Модел: {car.name} </li>
                  <li>Цена: {car.price}</li>
                </ul>
              </Card>
            </Link>
          ));
        })}
      </div>
    </>
  );
};

export default GetList;
