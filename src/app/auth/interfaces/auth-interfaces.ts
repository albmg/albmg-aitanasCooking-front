export interface AuthResponse {
  ok: boolean;
  token?: string;
  email?: string;
  id?: string
}


export interface Usuario {
  //ok: boolean;
  id:   string;
  email: string;
  __v?:   number;
 }


