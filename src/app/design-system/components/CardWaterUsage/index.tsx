import { Droplet, TrendingDown, ChevronRight } from '@tamagui/lucide-icons'
import { Text, Card, YStack, XStack, Button, Circle, Progress } from 'tamagui'

export const WaterUsageCard = () => (
  <Card p="$4" elevate br="$xl" bg="white">
    <XStack mb="$2" ai="center" jc="space-between">
      <YStack>
        <Text fos={18} color="$text" fontWeight="700">
          Water Usage
        </Text>
        <Text fos={14} color="$subText">
          October 1-12
        </Text>
      </YStack>
      <Button size="$2" br="$full" color="$primary" fontWeight="700" bg="$primaryLight">
        View Details
      </Button>
    </XStack>

    <XStack py="$2" gap="$4" ai="center">
      {/* Simulação do Gráfico Circular */}
      <Circle
        bw={10}
        size={100}
        rotate="45deg"
        bc="$primaryLight"
        borderLeftColor="$primary"
        borderBottomColor="$primary"
      >
        <Droplet size={30} rotate="-45deg" color="$primary" />
      </Circle>

      <YStack gap="$1">
        <XStack gap="$1" ai="baseline">
          <Text fos={32} fontWeight="700">
            1,240
          </Text>
          <Text fos={14} color="$subText">
            m³
          </Text>
        </XStack>
        <Text fos={14} color="#45A3BB" fontWeight="600">
          75% of monthly goal
        </Text>
        <XStack p="$1.5" br="$sm" gap="$1" ai="center" bg="#E8F5E9" alignSelf="flex-start">
          <TrendingDown size={14} color="#2E7D32" />
          <Text fos={12} color="#2E7D32" fontWeight="700">
            On Track
          </Text>
        </XStack>
      </YStack>
    </XStack>
  </Card>
)
