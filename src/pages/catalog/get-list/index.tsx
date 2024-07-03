import React from 'react';
import { Card } from 'antd';
import { carFakeData } from '@/shared/constants/car-fake-data';
import './styles.scss';

const GetList: React.FC = () => {
  return (
    <>
      <h2>Каталог</h2>
      <div className={'catalog-list-wrapper'}>
        {carFakeData.map((item, index) => (
          // <Link to={`/catalog/${index}`} key={index} state={{ car: item }}>
          <Card
            key={index}
            title={item.Name.toUpperCase()}
            style={{ width: 300 }}
            hoverable
          >
            <ul>
              <li>
                Миль: <strong>{item.Miles_per_Gallon}</strong>
              </li>
              <li>
                Цилиндры: <strong>{item.Cylinders}</strong>
              </li>
              <li>
                Смещение: <strong>{item.Displacement}</strong>
              </li>
              <li>
                Лошадиные силы: <strong>{item.Horsepower}</strong>
              </li>
              <li>
                Вес в фунтах: <strong>{item.Weight_in_lbs}</strong>
              </li>
              <li>
                Ускорение: <strong>{item.Acceleration}</strong>
              </li>
              <li>
                Год: <strong>{item.Year}</strong>
              </li>
              <li>
                Источник: <strong>{item.Origin}</strong>
              </li>
            </ul>
          </Card>
          // </Link>
        ))}
      </div>
    </>
  );
};

export default GetList;
