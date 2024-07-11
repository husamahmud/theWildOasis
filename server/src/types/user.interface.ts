import { RefreshTokenI } from './refreshToken.interface'

export interface UserI {
  id: string;
  createdAt?: Date;
  username: string;
  email: string;
  password: string;
  refreshTokens: RefreshTokenI[];
}

export interface LoginI {
  email: string
  isRememberMe: boolean
  password: string
}
