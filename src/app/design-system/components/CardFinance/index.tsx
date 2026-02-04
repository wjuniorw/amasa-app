import { Banknote, TrendingUp } from '@tamagui/lucide-icons'
import { Card, Text, XStack, Circle, YStack, Separator } from 'tamagui'

function CardFinance() {
  return (
    <Card
      p="$6"
      elevate
      br="$xl"
      bg="white"
      shadowRadius={10}
      shadowOpacity={0.1}
      shadowColor="$gray900"
    >
      <XStack ai="flex-start" jc="space-between">
        <YStack>
          <Text fos={12} color="$gray600" fontWeight="500">
            Total Balance
          </Text>
          <Text fos={28} fontWeight="700">
            R$ 1.450,20
          </Text>
        </YStack>
        <Circle size={40} bg="#22C55E15">
          <TrendingUp size={20} color="$success" />
        </Circle>
      </XStack>

      <Separator my="$4" bc="$gray100" />

      <XStack ai="center" jc="space-between">
        <XStack gap="$3" ai="center">
          <Circle size={32} bg="$gray100">
            <Banknote size={16} color="$gray600" />
          </Circle>
          <YStack>
            <Text fos={11} fontWeight="700">
              IPTU 2024
            </Text>
            <Text fos={10} color="$gray600">
              Scheduled for Oct 15
            </Text>
          </YStack>
        </XStack>
        <Text fos={12} color="$primary" fontWeight="700">
          View Bill
        </Text>
      </XStack>
    </Card>
  )
}
export default CardFinance
