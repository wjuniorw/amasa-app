import { Text, YStack } from 'tamagui'
import { useRouter } from 'expo-router'
import { AmasaCard, AmasaButton } from '@core/ui'

export default function Index() {
  const router = useRouter()
  return (
    <YStack f={1} px="$4" ai="center" jc="center" bg="$background">
      <AmasaCard bg="$blue10" elevation={4} alignItems="center">
        <Text fontSize="$6" color="$color" fontWeight="bold" textAlign="center">
          Amasa app is Configured!
        </Text>
        <AmasaButton mt="$4">Hello World</AmasaButton>
        <AmasaButton mt="$4" onPress={() => router.push('/design-system')}>
          Design System
        </AmasaButton>
      </AmasaCard>
    </YStack>
  )
}
