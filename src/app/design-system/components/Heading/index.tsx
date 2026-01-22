import { Text, YStack, XStack, Separator } from 'tamagui'

function Heading() {
  return (
    <YStack gap="$3">
      <Text fos={22} fontWeight="700">
        Typography
      </Text>
      <YStack br="$lg" bg="white" ov="hidden">
        <XStack p="$4" ai="center" jc="space-between">
          <YStack>
            <Text fos={24} fontWeight="700">
              H1 - Headline Large
            </Text>
            <Text fos={14} color="$gray600">
              The quick brown fox jumps...
            </Text>
          </YStack>
          <Text fos={12} opacity={0.6} color="$gray600">
            24PT
          </Text>
        </XStack>
        {/* Repetir para H2, Body, etc conforme sua necessidade */}
        <Separator borderColor="$gray100" />
        <XStack p="$4" ai="center" jc="space-between">
          <YStack>
            <Text fos={20} fontWeight="700">
              H2 - Headline Large
            </Text>
            <Text fos={14} color="$gray600">
              The quick brown fox jumps...
            </Text>
          </YStack>
          <Text fos={12} opacity={0.6} color="$gray600">
            20PT
          </Text>
        </XStack>
        <Separator borderColor="$gray100" />
        <XStack p="$4" ai="center" jc="space-between">
          <YStack>
            <Text fos={16} fontWeight="700">
              Body - Regular
            </Text>
            <Text fos={14} color="$gray600">
              The quick brown fox jumps...
            </Text>
          </YStack>
          <Text fos={12} opacity={0.6} color="$gray600">
            16PT
          </Text>
        </XStack>
        <XStack p="$4" ai="center" jc="space-between">
          <YStack>
            <Text fos={12} fontWeight="700">
              Caption - Small
            </Text>
            <Text fos={14} color="$gray600">
              The quick brown fox jumps...
            </Text>
          </YStack>
          <Text fos={12} opacity={0.6} color="$gray600">
            12PT
          </Text>
        </XStack>
      </YStack>
    </YStack>
  )
}

export default Heading
