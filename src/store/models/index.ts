export interface IMolecule {
  _id: string;
  title: string;
  qty: number;
  price: number;
  discount_price: number;
  image: string;
  __v: number;
}

export interface ISalad {
  _id: string;
  title: string;
  price: number;
  discount_price: number;
  composition: Array<string>[];
  __v: string;
}

interface IPartOrder {
  _id: number | string;
  qty: number;
}

export interface IOrder {
  molecule: Array<IPartOrder> []
}

export interface IResponseMS {
  success: boolean;
  result: IMolecule[] | ISalad[];
}