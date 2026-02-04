import { useState } from 'react'
import { LoginUseCase } from '@auth/domain/use-cases/login.use-case'

export function useLoginViewModel(loginUseCase: LoginUseCase) {
  const [email, setEmail] = useState('admin@amasa.com') // Pre-filled p/ dev
  const [password, setPassword] = useState('123456')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (onSuccess: () => void) => {
    try {
      setIsLoading(true)
      setError(null)
      await loginUseCase.execute({ email, password })
      onSuccess()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleLogin,
  }
}
