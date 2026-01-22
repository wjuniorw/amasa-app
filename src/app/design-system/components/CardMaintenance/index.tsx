import { Text, Card, YStack, XStack } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'

const MaintenanceAlertCard = () => (
  <Card f={1} elevate h={160} fd="row" br="$xl" bg="white" ov="hidden">
    {/* Área da Imagem */}
    <YStack w="35%" bg="$gray100">
      {/* Aqui entraria o componente <Image /> do React Native */}
      <YStack f={1} bg="#ccc" />
    </YStack>

    <YStack f={1} p="$3" gap="$1" jc="center">
      <XStack px="$2" mb="$1" br="$sm" py="$0.5" bg="$warning" opacity={0.2} alignSelf="flex-start">
        <Text fos={10} tt="uppercase" fontWeight="800" color="$warning">
          Alert
        </Text>
      </XStack>
      <Text lh={20} fos={16} color="$text" fontWeight="700">
        Water Main Maintenance Scheduled
      </Text>
      <Text fos={12} fontWeight="600" color="$subText" numberOfLines={2}>
        Check if your area is affected this weekend. Service may be...
      </Text>
      <XStack mt="$2" gap="$1" ai="center">
        <Text fos={14} color="$primary" fontWeight="700">
          Read More
        </Text>
        <ChevronRight size={16} color="$primary" />
      </XStack>
    </YStack>
  </Card>
)

export default MaintenanceAlertCard
