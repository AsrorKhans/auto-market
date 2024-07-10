import { ICars, ICarsList } from '@shared/types/ICars.ts';
import { Button, Table } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

export const FakeDataTable = (props: ICarsList) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cars, bankName } = props;
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
        <Button
          type={'primary'}
          onClick={() => navigate(location.pathname + '/' + text.id)}
        >
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
