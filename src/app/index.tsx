import { Text, YStack } from 'tamagui'
import { AmasaCard, AmasaButton } from '@core/ui'

export default function Index() {
  return (
    <YStack f={1} ai="center" jc="center" bg="$background">
      <AmasaCard elevation={4} bg="$blue10">
        <Text color="$color" fontSize="$6" fontWeight="bold" px="$1">
          Amasa app is Configured!
        </Text>
        <AmasaButton mt="$4">Hello World</AmasaButton>
      </AmasaCard>
    </YStack>
  )
}
