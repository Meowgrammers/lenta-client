type LoginResponse = {
  auth_token: string
}

type LoginRequest = {
  password: string
  username: string
}
type LogoutRequest = {
  auth_token: string
}

export { type LoginResponse, type LoginRequest, type LogoutRequest }
