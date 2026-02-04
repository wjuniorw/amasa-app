import { LoginDto, LoginResponseDto } from '@auth/domain/dtos/login.dto'
import { User, UserRole, ResidentCategory } from '@auth/entities/user.entity'
import { RegisterDto, RegisterResponseDto } from '@auth/domain/dtos/register.dto'
import { IAuthRepository } from '@auth/domain/repositories/auth.repository.interface'

// Delay auxiliar
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export class InMemoryAuthRepository implements IAuthRepository {
  // Simulação de Banco de Dados
  private static users: User[] = [
    new User({
      id: '1',
      name: 'Wjunior',
      email: 'admin@amasa.com', // Credencial de Teste
      address: 'Rua Beira Rio, Lote 12',
      phone: '(73) 99999-9999',
      role: UserRole.RESIDENT,
      category: ResidentCategory.MORADOR,
      avatarUrl: 'https://github.com/wjuniorw.png', // Se tiver
    }),
  ]

  async login({ email, password }: LoginDto): Promise<LoginResponseDto> {
    await delay(1000) // Simula request

    // Backdoor para teste fácil
    if (password === '123456') {
      const user = InMemoryAuthRepository.users.find((u) => u.email === email)
      if (user) return { token: 'mock-token', user }
    }

    throw new Error('Credenciais inválidas. (Dica: use admin@amasa.com / 123456)')
  }

  async register(data: RegisterDto): Promise<RegisterResponseDto> {
    await delay(1500)

    const exists = InMemoryAuthRepository.users.find((u) => u.email === data.email)
    if (exists) throw new Error('E-mail já cadastrado.')

    const newUser = new User({
      id: Math.random().toString(36).substring(7),
      name: data.name,
      email: data.email,
      address: data.address,
      role: UserRole.RESIDENT,
      category: ResidentCategory.MORADOR, // Default
    })

    InMemoryAuthRepository.users.push(newUser)
    return { token: 'mock-token', user: newUser }
  }

  async logout(): Promise<void> {
    await delay(500)
  }

  async getCurrentUser(): Promise<User | null> {
    await delay(500)
    // Num app real, leria o token do AsyncStorage aqui
    return InMemoryAuthRepository.users[0] || null
  }
}
