export interface AuthResponse {
  ok: boolean;
  token?: string;
  email?: string;
  id?: string
  username?: string
}


export interface Usuario {
  id:   string;
  username: string;
  email: string;
  __v?:   number;
}


