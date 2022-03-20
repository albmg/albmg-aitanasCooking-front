import { Menu } from "./menus.interface";
import { Product } from "./products.interface";

export interface Orders {
  purchasedMenus:    Menu[];
  _id:               string;
  username?:         string;
  email:             string;
  adress:            string;
  phone:             string;
  purchasedProducts: Product[];
  __v?:              number;
  clientName?:       string;
}
