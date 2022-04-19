import { Menu } from "./menus.interface";
import { Product } from "./products.interface";

export interface Order {
  _id?:               string;
  clientName?:       string;
  email?:             string;
  adress?:            string;
  phone?: string;
  createdDate?: number;
  purchasedProducts?: Product[];
  purchasedMenus?:    Menu[];
  __v?:              number;
}
