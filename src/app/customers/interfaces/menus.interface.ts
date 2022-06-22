export interface Menu {
  _id:          string;
  name:         string;
  createdDate:  null;
  description:  string;
  diners:       number;
  dishes:       Dish[];
  image:        string;
  number:       number;
  price:        number;
  defaultUnits: number;
  __v?:         number;
}

export interface Dish {
  _id:         string;
  name:        string;
  image:       string;
  description: string;
  ingredients: string[];
  createdDate: Date;
  __v?:        number;
}
