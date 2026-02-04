// import { User } from '@auth/entities/user.entity'
import { LoginDto, loginSchema, LoginResponseDto } from '@auth/domain/dtos/login.dto'
import { IAuthRepository } from '@auth/domain/repositories/auth.repository.interface'

export class LoginUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(credentials: LoginDto): Promise<LoginResponseDto> {
    // Validações
    const validData = await loginSchema.parseAsync(credentials)

    return await this.authRepository.login(validData)
  }
}
