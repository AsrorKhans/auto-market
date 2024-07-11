import { create } from 'zustand';
import { ICars, ICarsList, IGetCarsListProps } from '@shared/types/ICars.ts';
import { BANKS_LIST } from '@shared/constants/banks-list.ts';
import { CARS_BRAND, CARS_MODEL } from '@shared/constants/car-names.ts';

type StateType = {
  bankList: ICarsList[];
  updatePrice: (props: ICars, bankName: BANKS_LIST | string) => void;
  getCarsByParams: (
    props: IGetCarsListProps,
    bankName: BANKS_LIST
  ) => ICarsList;
};
export const usePriceListStore = create<StateType>((set) => ({
  getCarsByParams: (
    { year, name, brandName }: IGetCarsListProps,
    bankName: BANKS_LIST
  ): ICarsList => {
    const state: any = usePriceListStore.getState();
    const bank = state.bankList.find(
      (bank: ICarsList) => bank.bankName === bankName
    );
    let result: ICarsList = { cars: [], bankName: bank.bankName };
    if (!bank) {
      result = { cars: [], bankName: '' };
    }

    result.cars = bank.cars.filter(
      (car: ICars) =>
        (year === undefined || car.year === year) &&
        (name === undefined || car.name === name) &&
        (brandName === undefined || car.brandName === brandName)
    );
    console.log('result', result);
    return result;
  },
  //   console.log('PROPS', props, bankName);
  //   const { brandName, name, year } = props;
  //   const result: ICarsList = { cars: [], bankName: '' };
  // state.bankList.map((item) => {
  //   if (item.bankName === bankName) {
  //     result.bankName = item.bankName;
  //   }
  //   result.cars = item.cars.filter(
  //       (item) => item.year === year && item.name === name
  //   );
  // });
  // console.log('result', result);
  // return result;

  updatePrice: ({ name, brandName, year, price }, bankName) =>
    set((state) => {
      const updatedBankList = state.bankList.map((bank) => {
        if (bank.bankName === bankName) {
          const updatedCars = bank.cars.map((car) => {
            if (
              car.name === name &&
              car.brandName === brandName &&
              car.year === year
            ) {
              return { ...car, price };
            }
            return car;
          });
          return { ...bank, cars: updatedCars };
        }
        return bank;
      });

      return { bankList: updatedBankList };
    }),
  bankList: [
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
          price: 11250,
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
          price: 12230,
          additional_characteristic: 'LS MT',
        },
        {
          id: 8,
          name: CARS_MODEL.GENTRA,
          brandName: CARS_BRAND.CHEVROLET,
          year: 2023,
          price: 12450,
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
  ],
}));
