import { CircleDollarSign } from '@tamagui/lucide-icons'
import { Text, Card, YStack, XStack, Button, Circle, Progress } from 'tamagui'

const CurrentBalanceCard = () => (
  <Card p="$5" elevate br="$xl" bg="$primaryDark">
    <XStack mb="$6" ai="center" jc="space-between">
      <XStack gap="$2" ai="center">
        <Circle size={32} bg="rgba(255,255,255,0.1)">
          <CircleDollarSign size={24} color="white" />
        </Circle>
        <Text fos={16} color="white" opacity={0.8} fontWeight="500">
          Arrecadado
        </Text>
      </XStack>
      <XStack px="$3" py="$1" br="$full" bg="rgba(255,255,255,0.1)">
        <Text fos={12} color="white" fontWeight="600">
          Due Oct 15
        </Text>
      </XStack>
    </XStack>

    <XStack ai="flex-end" jc="space-between">
      <YStack>
        <Text fos={40} color="white" fontWeight="700">
          $45.20
        </Text>
        <Text fos={14} color="white" opacity={0.7}>
          Last payment: Sep 14
        </Text>
      </YStack>
      <Button px="$6" br="$lg" bg="white" fontWeight="700" color="$primaryDark">
        Contribuir
      </Button>
    </XStack>
  </Card>
)

export default CurrentBalanceCard
