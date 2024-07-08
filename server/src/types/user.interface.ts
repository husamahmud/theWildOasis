export interface UserI {
  id: string;
  username: string;
  email: string;
  password: string;
  accessToken?: string | null;
  refreshToken?: string | null;
}
