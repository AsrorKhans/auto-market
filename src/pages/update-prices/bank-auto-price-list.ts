import { BANKS_LIST } from '@shared/constants/banks-list.ts';
import { ICars, ICarsList } from '@shared/types/ICars.ts';

export const bankAutoPriceList: ICarsList[] = [];
type Props = {
  bankName: BANKS_LIST;
  params: ICars;
};
export const getCarsListByParams = (params: Props): ICarsList => {
  const { brandName, name, year } = params.params;
  console.log('params', params);
  const result: ICarsList = { cars: [], bankName: '' };
  bankAutoPriceList.map((item) => {
    if (item.bankName === params.bankName) {
      result.bankName = item.bankName;
    }
    result.cars = item.cars.filter(
      (item) => item.year === year && item.name === name
    );
  });
  console.log('result', result);

  return result;
};
