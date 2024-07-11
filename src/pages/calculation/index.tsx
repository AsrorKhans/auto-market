import React, { useState } from 'react';
import {
  Button,
  Card,
  Form,
  InputNumber,
  Row,
  Select,
  Slider,
  Space,
  Table,
} from 'antd';
import { RiCalculatorLine } from '@remixicon/react';
import {
  fakeCardPaymentListTableData,
  fakeCarPaymentListTableColumns,
} from '@pages/calculation/fake-card-payment-list.tsx';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const Calculation: React.FC = () => {
  const [form] = Form.useForm();
  const [price, setPrice] = useState(0); // Initial price value
  const minPriceOfCar = 0;
  const maxPriceOfCar = 100000000;
  const [visiblePaymentList, setVisiblePaymentList] = useState<boolean>(false);

  const onChange = (value: any) => {
    setPrice(value);
  };
  const handleChangeSelectBank = (value: string) => {
    console.log(`selected bank ${value}`);
  };

  const downloadXLSFile = async () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = () => {
      const ws = XLSX.utils.json_to_sheet(fakeCardPaymentListTableData);
      const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, 'Платежный лист' + fileExtension);
    };
    exportToCSV();
  };

  return (
    <>
      <h2>Кредитный калькулятор</h2>
      <Card>
        <Space>
          <Form form={form} layout={'vertical'} className={'calculation-form'}>
            <Form.Item name={'bankName'} label={'Выберите банк'}>
              <Select
                defaultValue=""
                style={{ width: '100%' }}
                onChange={handleChangeSelectBank}
                options={[
                  { value: 'anorbank', label: 'ANORBANK' },
                  { value: 'uzumbank', label: 'Uzumbank' },
                  { value: 'ipotekabank', label: 'IPOTEKA' },
                  { value: 'davrbank', label: 'DAVRBANK', disabled: true },
                ]}
              />
            </Form.Item>
            <Form.Item
              name={'priceRange'}
              label={'Первоначальная сумма'}
              className={'calculation-form__price-range'}
            >
              <InputNumber
                min={minPriceOfCar}
                max={maxPriceOfCar}
                value={price}
                onChange={onChange}
                style={{ width: '100%' }}
              />
              <Slider
                min={minPriceOfCar}
                max={maxPriceOfCar}
                onChange={onChange}
                value={typeof price === 'number' ? price : 0}
              />
            </Form.Item>
            <Form.Item name={'job'} label={'Есть ли работа'}>
              <Select
                options={[
                  { value: 'hasJob', label: 'Есть работа' },
                  {
                    value: 'noJob',
                    label: 'Нет работы',
                  },
                ]}
              />
            </Form.Item>
            <Button
              type={'primary'}
              htmlType={'submit'}
              icon={<RiCalculatorLine size={12} />}
              onClick={() => setVisiblePaymentList(!visiblePaymentList)}
            >
              Рассчитать
            </Button>
            <br />
          </Form>
        </Space>
      </Card>
      {visiblePaymentList && (
        <>
          <Row justify={'end'}>
            <Button onClick={downloadXLSFile} type={'primary'}>
              Скачать лист
            </Button>
          </Row>
          <Table
            children={<></>}
            columns={fakeCarPaymentListTableColumns}
            dataSource={fakeCardPaymentListTableData}
            direction={'ltr'}
            // components={{
            //   header: {
            //     row: () => (
            //       <Row justify={'end'} style={{ width: '100%' }}>
            //         <Button type={'primary'}>Скачать</Button>
            //       </Row>
            //     ),
            //   },
            // }}
          />
        </>
      )}
    </>
  );
};

export default Calculation;
