import { Text, Card, YStack, XStack, Circle } from 'tamagui'
import { Calendar, CheckCircle } from '@tamagui/lucide-icons'

export default function CardStatus() {
  return (
    <YStack gap="$4">
      <Text fos={12} tt="uppercase" fontWeight="700" color="$subText">
        Detailed Status Card
      </Text>

      <Card p="$4" elevate br="$lg" bg="white">
        <XStack gap="$4" ai="center" jc="space-between">
          {/* Ícone e Conteúdo */}
          <XStack f={1} gap="$3" ai="center">
            <Circle size={48} ai="center" jc="center" bg="$primaryLight">
              <Calendar size={24} color="$primary" />
            </Circle>
            <YStack f={1}>
              <Text fos={16} fontWeight="700">
                Agendamento Próximo
              </Text>
              <Text fos={12} color="$subText">
                Visita técnica para medição em 2 dias.
              </Text>
            </YStack>
          </XStack>

          {/* Tag de Status */}
          <XStack p="$2" gap="$1" br="$full" ai="center" bg="#22C55E15">
            <CheckCircle size={14} color="$success" />
            <Text fos={12} fontWeight="700" color="$success">
              Confirmado
            </Text>
          </XStack>
        </XStack>
      </Card>
    </YStack>
  )
}
