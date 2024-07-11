import { ICars, IGetCarsListProps } from '@shared/types/ICars.ts';
import { Button, Form, Input } from 'antd';
import { usePriceListStore } from '@shared/store/update-price';
import { BANKS_LIST } from '@shared/constants/banks-list.ts';

type Props = {
  bankName: BANKS_LIST | string;
  data: ICars;
};
export default function UpdatePriceFormBySearchParams({
  data,
  bankName,
}: Props) {
  const { price, year, additional_characteristic, id, name, brandName } = data;
  const [form] = Form.useForm();
  const updatePrice = () => {
    usePriceListStore.getState().updatePrice(
      {
        ...data,
        price: Number(data.price),
      },
      bankName
    );
  };
  const onFinish = (values: IGetCarsListProps) => {
    console.log('onFinish', values);
    updatePrice();
  };

  return (
    <Form form={form} layout={'vertical'} onFinish={onFinish}>
      <Form.Item
        label={'ID'}
        initialValue={id}
        rules={[{ required: true, message: 'Поля не может быть пустым' }]}
      >
        <Input disabled={true} value={id} />
      </Form.Item>
      <Form.Item
        label={'Бренд'}
        name={'brandName'}
        initialValue={brandName}
        rules={[{ required: true, message: 'Поля не может быть пустым' }]}
      >
        <Input disabled={true} value={brandName} />
      </Form.Item>
      <Form.Item
        name={'name'}
        label={'Модел'}
        initialValue={name}
        rules={[{ required: true, message: 'Поля не может быть пустым' }]}
      >
        <Input disabled={true} value={name} />
      </Form.Item>
      <Form.Item
        name={'year'}
        label={'Год'}
        initialValue={year}
        rules={[{ required: true, message: 'Поля не может быть пустым' }]}
      >
        <Input disabled={true} value={year} />
      </Form.Item>
      <Form.Item
        initialValue={String(price)}
        name={'price'}
        label={'Цена'}
        rules={[{ required: true, message: 'Поля не может быть пустым' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType={'submit'}
          type={'primary'}
          style={{ width: '100%', height: '40px' }}
        >
          Обновить цену
        </Button>
      </Form.Item>
    </Form>
  );
}
