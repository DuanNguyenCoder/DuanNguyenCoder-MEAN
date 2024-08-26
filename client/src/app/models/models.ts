export interface product {
  _id?: string;
  name: string;
  price: number;
  des: string;
  url: string;
  stock?: number;
  cate?: string;
}

export interface cartItem {
  _id?: string;
  name: string;
  price: number;
  des: string;
  url: string;
  quantity: number;
}
