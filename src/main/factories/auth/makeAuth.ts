import { LoginUseCase } from '@auth/domain/use-cases/login.use-case'
import { IAuthRepository } from '@auth/domain/repositories/auth.repository.interface'
import { InMemoryAuthRepository } from '@auth/data/repositories/in-memory-auth.repository'

// Singleton do Repositório (para manter os dados em memória enquanto o app roda)
const authRepository: IAuthRepository = new InMemoryAuthRepository()

export const makeLoginUseCase = () => {
  return new LoginUseCase(authRepository)
}

// Se tiver UseCase de Logout ou GetCurrentUser, faça aqui também
export const getAuthRepository = () => {
  return authRepository
}
