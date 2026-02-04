import { router } from 'expo-router'
import { Text, YStack } from 'tamagui'
import { AmasaCard, AmasaButton } from '@core/ui'

export default function HomeScreen() {
  return (
    <YStack f={1} p="$6" space="$4" jc="center" ai="center" bg="$background">
      <Text fontSize="$6" color="$primary" fontWeight="bold">
        Home
      </Text>
      <AmasaCard bg="$blue10" elevation={4} alignItems="center">
        <Text fontSize="$6" color="$color" fontWeight="bold" textAlign="center">
          Amasa app Home
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
