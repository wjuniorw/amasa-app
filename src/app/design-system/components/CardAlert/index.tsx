import { X, AlertTriangle } from '@tamagui/lucide-icons'
import { Text, Card, Input, YStack, XStack, Button, Circle, Separator } from 'tamagui'

export default function CardAlert() {
  return (
    <YStack gap="$4">
      <Text fos={12} tt="uppercase" fontWeight="700" color="$subText">
        Warning Card
      </Text>

      <Card
        p="$4"
        bw={2}
        br="$md"
        bc="$warning" // Borda amarela
        bg="$warning" // O Tamagui não tem a cor clara nativa, então ajustamos o background
        style={{ backgroundColor: '#FEF9C3' }} // Fundo amarelo muito claro (similar a 'bg-yellow-50')
      >
        <XStack gap="$3" ai="flex-start">
          <Circle mt={2} size={24} ai="center" jc="center" bg="$warning">
            <AlertTriangle size={16} color="white" />
          </Circle>
          <YStack f={1} gap="$1">
            <Text fos={14} color="$text" fontWeight="700">
              Atenção - Pagamento Pendente
            </Text>
            <Text fos={12} color="$text">
              A sua conta de água referente ao mês anterior está atrasada. Evite juros e multa.
            </Text>
          </YStack>
          <Button p={0} circular icon={X} size="$2" color="$text" bg="transparent" />
        </XStack>
      </Card>
    </YStack>
  )
}
