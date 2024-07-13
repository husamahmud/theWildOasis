export interface LoginI {
  email: string
  isRememberMe: boolean
  password: string
}

export interface RegisterI {
  username: string
  email: string
  fullname: string
  password: string
}

export interface UserI {
  id: string
  username: string
  fullname: string
  email: string
  avatar: string
  password: string
}
