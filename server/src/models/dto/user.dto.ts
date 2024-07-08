import { UserI } from '../../types/user.interface'

export class UserDto implements Partial<UserI> {
  username: string
  email: string
  password: string

  constructor(bodyRequest: UserI) {
    this.username = bodyRequest.username
    this.email = bodyRequest.email
    this.password = bodyRequest.password
  }
}
