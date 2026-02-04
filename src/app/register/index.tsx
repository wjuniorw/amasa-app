import { router } from 'expo-router'
import { Text, YStack } from 'tamagui'
import { AmasaButton } from '@core/ui'

export default function RegisterScreen() {
  return (
    <YStack f={1} p="$6" space="$4" jc="center" ai="center" bg="$background">
      <Text fontSize="$6" color="$primary" fontWeight="bold">
        Register
      </Text>
      <AmasaButton onPress={() => router.back()}>Voltar</AmasaButton>
    </YStack>
  )
}
