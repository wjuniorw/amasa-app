import { Text, View, YStack } from 'tamagui'
import { ActivityIndicator } from 'react-native'
import { AmasaCard, AmasaButton } from '@core/ui'
import { Redirect, useRouter } from 'expo-router'
import { useAuth } from '@auth/context/auth-provider'

export default function Index() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0066CC" />
      </View>
    )
  }

  if (user) {
    return <Redirect href="/home" />
  }

  return (
    <YStack f={1} px="$4" ai="center" jc="center" bg="$background">
      <AmasaCard bg="$blue10" elevation={4} alignItems="center">
        <Text fontSize="$6" color="$color" fontWeight="bold" textAlign="center">
          Amasa app!
        </Text>
        <AmasaButton mt="$4">Hello World</AmasaButton>
        <AmasaButton mt="$4" onPress={() => router.push('/design-system')}>
          Design System
        </AmasaButton>
        <AmasaButton mt="$4" onPress={() => router.push('/login')}>
          Login
        </AmasaButton>
        <AmasaButton mt="$4" onPress={() => router.push('/register')}>
          Register
        </AmasaButton>
        <AmasaButton mt="$4" onPress={() => router.push('/home')}>
          Home
        </AmasaButton>
      </AmasaCard>
    </YStack>
  )
}
