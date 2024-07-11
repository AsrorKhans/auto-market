import { ICars, ICarsList } from '@shared/types/ICars.ts';
import { Button, Table } from 'antd';
import { modalWindow } from '@shared/ui/modal';
import { UpdatePriceFormBySearchParams } from '@/features/update-price';
import React from 'react';

type Props = {
  data: ICarsList;
};
export const PriceListTable = (props: Props) => {
  const { cars, bankName } = props.data;
  const openUpdatePriceWindow = (data: ICars) => {
    modalWindow({
      content: (
        <UpdatePriceFormBySearchParams data={data} bankName={bankName} />
      ),
    });
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Бренд',
      dataIndex: 'brandName',
    },
    {
      title: 'Модель',
      dataIndex: 'name',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
    },
    {
      title: 'Дата выпуска',
      dataIndex: 'year',
    },
    {
      title: '',
      render: (text: ICars) => (
        <Button type={'primary'} onClick={() => openUpdatePriceWindow(text)}>
          Изменить
        </Button>
      ),
    },
  ];

  return (
    <div>
      {bankName ?? <h3>Банк: {bankName}</h3>}
      <div>
        <Table rowKey={'id'} columns={columns} dataSource={cars} />
      </div>
    </div>
  );
};
