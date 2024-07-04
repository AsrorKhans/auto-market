import { Form, Select } from 'antd';

const UpdatePrices = () => {
  return (
    <div>
      <h2>Обновить цены</h2>
      <Form
        layout={'horizontal'}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Form.Item name={'bankName'} label={'Выберите банк'}>
          <Select
            defaultValue="kapitalbank"
            style={{ width: '100%' }}
            options={[
              { value: 'anorbank', label: 'ANORBANK' },
              { value: 'uzumbank', label: 'Uzumbank' },
              { value: 'kapitalbank', label: 'KAPITALBANK' },
              { value: 'davrbank', label: 'DAVRBANK', disabled: true },
            ]}
          />
        </Form.Item>
        <Form.Item name={'brandName'} label={'Выберите марку'}>
          <Select
            defaultValue="chevrolet"
            style={{ width: '100%' }}
            options={[
              { value: 'chevrolet', label: 'Chevrolet' },
              { value: 'kia', label: 'KIA' },
              { value: 'hyundai', label: 'Hyundai' },
            ]}
          />
        </Form.Item>
        <Form.Item name={'model'} label={'Выберите модель'}>
          <Select
            defaultValue="gentra"
            style={{ width: '100%' }}
            options={[
              { value: 'cobalt', label: 'Cobalt' },
              { value: 'gentra', label: 'Gentra' },
              { value: 'damas', label: 'Damas' },
              { value: 'spark', label: 'Spark' },
            ]}
          />
        </Form.Item>
        <Form.Item name={'year'} label={'Выберите год'}>
          <Select
            defaultValue="2024"
            style={{ width: '100%' }}
            options={[
              { value: '2024', label: '2024' },
              { value: '2023', label: '2023' },
              { value: '2022', label: '2022' },
              { value: '2021', label: '2021' },
              { value: '2020', label: '2020' },
              { value: '2019', label: '2019' },
            ]}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdatePrices;
