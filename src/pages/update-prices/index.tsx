import { Button, Form, Select } from 'antd';
import { FakeDataTable } from '@pages/update-prices/fake-data.tsx';
import { useState } from 'react';
import { BANKS_LIST } from '@shared/constants/banks-list.ts';
import { RiSearchLine } from '@remixicon/react';
import { CARS_BRAND, CARS_MODEL } from '@shared/constants/car-names.ts';
import { ICars, ICarsList } from '@shared/types/ICars.ts';
import { getCarsListByParams } from '@pages/update-prices/bank-auto-price-list.ts';

const UpdatePrices = () => {
  const [bankName, setBankName] = useState<BANKS_LIST>(BANKS_LIST.ANORBANK);
  const [data, setData] = useState<ICarsList>({ cars: [], bankName: '' });
  const [form] = Form.useForm();
  const onFinish = (values: ICars) => {
    console.log('values', values);
    setData(getCarsListByParams({ params: values, bankName }));
  };
  return (
    <div>
      <h2>Обновить цены</h2>
      <Form
        form={form}
        onFinish={onFinish}
        layout={'horizontal'}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Form.Item
          name={'bankName'}
          label={'Выберите банк'}
          initialValue={BANKS_LIST.ANORBANK}
          rules={[{ required: true, message: 'Поля не может быть пустым' }]}
        >
          <Select
            style={{ width: '100%', minWidth: 100 }}
            onChange={(e) => setBankName(e)}
            options={[
              { value: BANKS_LIST.ANORBANK, label: BANKS_LIST.ANORBANK },
              { value: BANKS_LIST.UZUMBANK, label: BANKS_LIST.UZUMBANK },
              {
                value: BANKS_LIST.DAVRBANK,
                label: BANKS_LIST.DAVRBANK,
                disabled: true,
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={'brandName'}
          label={'Выберите марку'}
          rules={[{ required: true, message: 'Поля не может быть пустым' }]}
        >
          <Select
            style={{ width: '100%', minWidth: 100 }}
            options={[
              { value: CARS_BRAND.CHEVROLET, label: CARS_BRAND.CHEVROLET },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={'name'}
          label={'Выберите модель'}
          rules={[{ required: true, message: 'Поля не может быть пустым' }]}
        >
          <Select
            style={{ width: '100%', minWidth: 100 }}
            options={[
              { value: CARS_MODEL.COBALT, label: CARS_MODEL.COBALT },
              { value: CARS_MODEL.GENTRA, label: CARS_MODEL.GENTRA },
              { value: CARS_MODEL.SPARK, label: CARS_MODEL.SPARK },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={'year'}
          label={'Выберите год'}
          rules={[{ required: true, message: 'Поля не может быть пустым' }]}
        >
          <Select
            style={{ width: '100%', minWidth: 100 }}
            options={[
              { value: 2024, label: '2024' },
              { value: 2023, label: '2023' },
            ]}
          />
        </Form.Item>
        <Button
          icon={<RiSearchLine size={12} />}
          htmlType={'submit'}
          type={'primary'}
        >
          Искать
        </Button>
      </Form>

      <FakeDataTable {...data} />
    </div>
  );
};

export default UpdatePrices;
