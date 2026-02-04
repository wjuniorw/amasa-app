// import { User } from '@auth/entities/user.entity'
import { User, LoginDto } from '@auth/domain/dtos/login.dto'
import { makeLoginUseCase, getAuthRepository } from '@factories/index'
import React, { useState, useEffect, useContext, createContext } from 'react'

interface AuthContextData {
  user: User | null
  isLoading: boolean
  signIn: (credentials: LoginDto) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const loginUseCase = makeLoginUseCase()
  const authRepo = getAuthRepository()

  useEffect(() => {
    async function loadStorageData() {
      try {
        setIsLoading(true)
        const storedUser = await authRepo.getCurrentUser()

        if (storedUser) {
          setUser(storedUser)
        }
      } catch (error: any) {
        console.log('Nenhuma sessão encontrada', error.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadStorageData()
  }, [loginUseCase, authRepo])

  const signIn = async (credentials: LoginDto) => {
    try {
      const loggedUser = await loginUseCase.execute(credentials)

      setUser(loggedUser.user)
      setIsLoading(false)

      // await AsyncStorage.setItem('@amasa:user', JSON.stringify(loggedUser));
    } catch (error: any) {
      console.log('Erro ao fazer login', error.message)
      // Repassa o erro para a tela tratar (exibindo toast/alerta)
      throw error
    }
  }

  // Função de Logout
  const signOut = async () => {
    try {
      await authRepo.logout()
      setUser(null)
      setIsLoading(true)
      // await AsyncStorage.clear();
    } catch (error: any) {
      console.log('Erro ao fazer logout', error.message)
      // Repassa o erro para a tela tratar (exibindo toast/alerta)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }

  return context
}
