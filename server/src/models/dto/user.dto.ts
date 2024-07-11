import { LoginI, UserI } from '../../types/user.interface'
import { RefreshTokenI } from '../../types/refreshToken.interface'

/**
 * Data Transfer Object (DTO) for login details.
 * This class is used to transfer data between layers and ensure the data integrity.
 **/
export class LoginDto {
  email: string
  isRememberMe: boolean
  password: string

  constructor(bodyRequest: LoginI) {
    this.email = bodyRequest.email
    this.isRememberMe = bodyRequest.isRememberMe
    this.password = bodyRequest.password
  }
}

/**
 * Data Transfer Object (DTO) for creating a new user.
 * This class is used to transfer data between layers and ensure the data integrity.
 **/
export class CreateUserDto {
  username: string
  email: string
  password: string

  constructor(bodyRequest: UserI) {
    this.username = bodyRequest.username!
    this.email = bodyRequest.email!
    this.password = bodyRequest.password!
  }
}

/**
 * Data Transfer Object (DTO) for user details.
 * This class is used to transfer data between layers and ensure the data integrity.
 **/
export class UserDto {
  id?: string
  username: string
  email: string
  password: string
  refreshTokens?: RefreshTokenI[]

  constructor(bodyRequest: UserI) {
    this.id = bodyRequest.id
    this.username = bodyRequest.username!
    this.email = bodyRequest.email!
    this.password = bodyRequest.password!
    this.refreshTokens = bodyRequest.refreshTokens
  }
}
