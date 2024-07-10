import { BANKS_LIST } from '@shared/constants/banks-list.ts';
import { ICars, ICarsList } from '@shared/types/ICars.ts';
import { CARS_BRAND, CARS_MODEL } from '@shared/constants/car-names.ts';

export const bankAutoPriceList: ICarsList[] = [
  {
    bankName: BANKS_LIST.ANORBANK,
    cars: [
      {
        id: 1,
        name: CARS_MODEL.ONIX,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2024,
        price: 12300,
        additional_characteristic: 'Premier1 Turbo AT',
      },
      {
        id: 2,
        name: CARS_MODEL.ONIX,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2024,
        price: 12300,
        additional_characteristic: 'Premier 2 Turbo AT',
      },
      {
        id: 3,
        name: CARS_MODEL.ONIX,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2023,
        price: 12300,
        additional_characteristic: '3LT MT',
      },
      {
        id: 4,
        name: CARS_MODEL.ONIX,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2023,
        price: 12600,
        additional_characteristic: 'LS MT',
      },
      {
        id: 5,
        name: CARS_MODEL.COBALT,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2024,
        price: 12400,
        additional_characteristic: 'LS MT',
      },
      {
        id: 6,
        name: CARS_MODEL.COBALT,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2023,
        price: 12500,
        additional_characteristic: 'LS MT',
      },
      {
        id: 7,
        name: CARS_MODEL.COBALT,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2024,
        price: 13000,
        additional_characteristic: 'LS MT',
      },
      {
        id: 8,
        name: CARS_MODEL.GENTRA,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2023,
        price: 12500,
        additional_characteristic: 'LS MT',
      },
      {
        id: 9,
        name: CARS_MODEL.GENTRA,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2024,
        price: 13000,
        additional_characteristic: 'LS MT',
      },
    ],
  },
  {
    bankName: BANKS_LIST.UZUMBANK,
    cars: [
      {
        id: 1,
        name: CARS_MODEL.GENTRA,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2024,
        additional_characteristic: 'L-STYLE AT PLUS',
        price: 12000,
      },
      {
        id: 2,
        name: CARS_MODEL.GENTRA,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2024,
        additional_characteristic: 'GN-ELEGANT A',
        price: 12000,
      },
      {
        id: 3,
        name: CARS_MODEL.GENTRA,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2023,
        additional_characteristic: 'GN-ELEGANT A',
        price: 12000,
      },
      {
        id: 4,
        name: CARS_MODEL.GENTRA,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2023,
        additional_characteristic: 'GN-ELEGANT A',
        price: 12000,
      },
      {
        id: 5,
        name: CARS_MODEL.COBALT,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2024,
        additional_characteristic: 'GN-ELEGANT A',
        price: 12300,
      },
      {
        id: 6,
        name: CARS_MODEL.COBALT,
        brandName: CARS_BRAND.CHEVROLET,
        year: 2023,
        additional_characteristic: 'GN-ELEGANT A',
        price: 12400,
      },
      {
        id: 7,
        name: CARS_MODEL.ONIX,
        brandName: CARS_BRAND.CHEVROLET,
        price: 13500,
        year: 2023,
        additional_characteristic: 'LS MT',
      },
      {
        id: 8,
        name: CARS_MODEL.ONIX,
        brandName: CARS_BRAND.CHEVROLET,
        price: 13500,
        year: 2023,
        additional_characteristic: 'LS MT',
      },
      {
        id: 9,
        name: CARS_MODEL.ONIX,
        brandName: CARS_BRAND.CHEVROLET,
        price: 13500,
        year: 2023,
        additional_characteristic: 'LS MT',
      },
      {
        id: 10,
        name: CARS_MODEL.ONIX,
        brandName: CARS_BRAND.CHEVROLET,
        price: 13500,
        year: 2023,
        additional_characteristic: 'LS MT',
      },
      {
        id: 11,
        name: CARS_MODEL.SPARK,
        brandName: CARS_BRAND.CHEVROLET,
        price: 13500,
        year: 2023,
        additional_characteristic: 'LS MT',
      },
      {
        id: 12,
        name: CARS_MODEL.SPARK,
        brandName: CARS_BRAND.CHEVROLET,
        price: 11000,
        year: 2023,
        additional_characteristic: 'LS MT',
      },
    ],
  },
];
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
