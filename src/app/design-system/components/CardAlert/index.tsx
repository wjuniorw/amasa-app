import { 
    YStack, XStack, Text, Button, Input, Card, 
    Circle, Separator
} from 'tamagui';
import { AlertTriangle, X } from '@tamagui/lucide-icons'; 

export default function CardAlert() {
    return (
<YStack gap="$4">
    <Text fos={12} fontWeight="700" color="$subText" tt="uppercase">Warning Card</Text>
    
    <Card 
        p="$4" 
        br="$md" 
        bw={2} 
        bc="$warning" // Borda amarela
        bg="$warning" // O Tamagui não tem a cor clara nativa, então ajustamos o background
        style={{ backgroundColor: '#FEF9C3' }} // Fundo amarelo muito claro (similar a 'bg-yellow-50')
    >
        <XStack ai="flex-start" gap="$3">
            <Circle size={24} bg="$warning" ai="center" jc="center" mt={2}>
                <AlertTriangle size={16} color="white" />
            </Circle>
            <YStack f={1} gap="$1">
                <Text fontWeight="700" color="$text" fos={14}>
                    Atenção - Pagamento Pendente
                </Text>
                <Text color="$text" fos={12}>
                    A sua conta de água referente ao mês anterior está atrasada. Evite juros e multa.
                </Text>
            </YStack>
            <Button 
                circular 
                size="$2" 
                icon={X} 
                bg="transparent" 
                color="$text" 
                p={0}
            />
        </XStack>
    </Card>
</YStack>)
}