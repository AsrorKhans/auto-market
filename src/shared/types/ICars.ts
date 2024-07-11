export interface ICars {
  id: number;
  name: string;
  brandName: string;
  year: number;
  additional_characteristic: string;
  price: number;
}

export interface ICarsList {
  bankName: string;
  cars: ICars[];
}

export interface IGetCarsListProps {
  bankName: string;
  brandName: string;
  name: string;
  year: number;
}

export interface IUser {
  id: number | string;
  name: string;
  email: string;
  job: string;
}

export interface IAuthContext {
  user: IUser;
  login: (user: IUser, accessToken: string, refreshToken: string) => void;
  logout: () => void;
  hasPermission: (role: string) => boolean;
  accessToken: string | null;
  refreshTokenFunc: () => Promise<void>;
}
