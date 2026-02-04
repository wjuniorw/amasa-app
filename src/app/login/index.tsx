import { router } from 'expo-router'
import { LoginView } from '@auth/presentation/login/login-view'
import { makeLoginUseCase } from '@factories/auth/makeLoginUseCase'
import { useLoginViewModel } from '@auth/presentation/login/login-view-model'

function LoginContainer() {
  const loginUseCase = makeLoginUseCase()
  const vm = useLoginViewModel(loginUseCase)
  return (
    <LoginView
      vm={vm}
      onSuccess={() => router.push('/home')}
      onNavigateToRegister={() => router.push('/register')}
    />
  )
}

export default LoginContainer
