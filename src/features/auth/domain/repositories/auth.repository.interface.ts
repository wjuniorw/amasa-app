import { User, LoginDto, LoginResponseDto } from '@auth/domain/dtos/login.dto'
import { RegisterDto, RegisterResponseDto } from '@auth/domain/dtos/register.dto'

export interface IAuthRepository {
  login(credentials: LoginDto): Promise<LoginResponseDto>
  register(data: RegisterDto): Promise<RegisterResponseDto>
  logout(): Promise<void>
  getCurrentUser(): Promise<User | null>
}
