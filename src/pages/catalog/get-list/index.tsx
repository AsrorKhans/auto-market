import React from 'react';
import { Button, Form, Input } from 'antd';
import './styles.scss';
import { useCatalogStore } from '@shared/store/catalog-store';

const GetList: React.FC = () => {
  const { users, setUsers, removeUserById } = useCatalogStore();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
    const requestedValue = {
      id: Date.now(),
      ...form.getFieldsValue(),
    };

    setUsers([...users, requestedValue]);
    form.resetFields();
  };
  return (
    <>
      <h2>Каталог</h2>
      <Form
        onFinish={onFinish}
        form={form}
        layout={'vertical'}
        style={{ maxWidth: 300 }}
      >
        <Form.Item
          rules={[{ required: true, message: 'Укажите имя пользователя' }]}
          name={'name'}
          label={'Имя пользователя'}
        >
          <Input placeholder={'Имя пользователя'} />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Укажите электронную почту' }]}
          name={'email'}
          label={'Email'}
        >
          <Input placeholder={'Email'} type={'email'} />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Укажите професию' }]}
          name={'job'}
          label={'Професия'}
        >
          <Input placeholder={'Професия'} />
        </Form.Item>
        <Button htmlType={'submit'}>ADD</Button>
      </Form>

      {users.map((item, index) => (
        <ul>
          <li>
            <strong>{index + 1}</strong>
          </li>
          <li key={index}>{item.id}</li>
          <li key={index}>{item.name}</li>
          <li key={index}>{item.job}</li>
        </ul>
      ))}
      {/*<div className={'catalog-list-wrapper'}>*/}
      {/*  {carFakeData.map((item, index) => (*/}
      {/*    // <Link to={`/catalog/${index}`} key={index} state={{ car: item }}>*/}
      {/*    <Card*/}
      {/*      key={index}*/}
      {/*      title={item.Name.toUpperCase()}*/}
      {/*      style={{ width: 300 }}*/}
      {/*      hoverable*/}
      {/*    >*/}
      {/*      <ul>*/}
      {/*        <li>*/}
      {/*          Миль: <strong>{item.Miles_per_Gallon}</strong>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          Цилиндры: <strong>{item.Cylinders}</strong>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          Смещение: <strong>{item.Displacement}</strong>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          Лошадиные силы: <strong>{item.Horsepower}</strong>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          Вес в фунтах: <strong>{item.Weight_in_lbs}</strong>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          Ускорение: <strong>{item.Acceleration}</strong>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          Год: <strong>{item.Year}</strong>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          Источник: <strong>{item.Origin}</strong>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </Card>*/}
      {/*    // </Link>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </>
  );
};

export default GetList;
