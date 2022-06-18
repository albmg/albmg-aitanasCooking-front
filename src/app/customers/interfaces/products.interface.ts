export interface Product {
  _id:          string;
  name:         string;
  image:        string;
  description:  string;
  ingredients:  string[];
  defaultUnits: number;
  weight?:      number;
  createdDate:  Date;
  price:        number;
  __v?:         number;
}
