import { LoginUseCase } from '@auth/domain/use-cases/login.use-case'
import { InMemoryAuthRepository } from '@auth/data/repositories/in-memory-auth.repository'

export function makeLoginUseCase() {
  const authRepository = new InMemoryAuthRepository()
  return new LoginUseCase(authRepository)
}
