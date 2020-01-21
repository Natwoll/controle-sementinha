import User from './user.models'

export default class LoginResponse {
  success: boolean
  message: string
  user: Array<User>
}
