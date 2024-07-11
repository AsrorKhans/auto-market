import React from 'react';
import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '@shared/constants/route-constants.ts';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
export const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log(values);
    login();
  };

  const login = () => {
    if (
      form.getFieldValue('username') === 'admin' ||
      form.getFieldValue('password') === 'admin'
    ) {
      navigate('/' + PAGE_ROUTES.CATALOG);
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={'login-form'}>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Логин"
          name="username"
          rules={[{ required: true, message: 'Пожалуйста введите ваш логин' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Пожалуйста введите ваш пароль' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
