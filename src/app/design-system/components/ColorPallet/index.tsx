import { Text, Circle, XStack, YStack } from 'tamagui'

function ColorPallet() {
  return (
    <YStack gap="$3">
      <Text fos={22} fontWeight="700">
        Color Palette
      </Text>
      <YStack gap="$4">
        <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
          PRIMARY BLUES
        </Text>
        <XStack gap="$4" ai="center" jc="space-between">
          <YStack>
            <Circle p="$2" bg="#    ffffffff">
              <Circle size={50} bg="$primary" />
            </Circle>
            <Text fos={12} color="$gray600">
              Primary
            </Text>
          </YStack>
          <YStack>
            <Circle p="$2" bg="#ffffffff">
              <Circle size={50} bg="$primaryLight" />
            </Circle>
            <Text fos={12} color="$gray600">
              Primary Light
            </Text>
          </YStack>
          <YStack>
            <Circle p="$2" bg="#ffffffff">
              <Circle size={50} bg="$primaryDark" />
            </Circle>
            <Text fos={12} color="$gray600">
              Primary Dark
            </Text>
          </YStack>
        </XStack>
      </YStack>
      <YStack gap="$4">
        <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
          SYSTEM FEEDBACK
        </Text>
        <XStack gap="$4" ai="center" jc="space-between">
          <YStack>
            <Circle p="$2" bg="#ffffffff">
              <Circle size={50} bg="$success" />
            </Circle>
            <Text fos={12} color="$gray600">
              Success
            </Text>
          </YStack>
          <YStack>
            <Circle p="$2" bg="#ffffffff">
              <Circle size={50} bg="$warning" />
            </Circle>
            <Text fos={12} color="$gray600">
              Warning
            </Text>
          </YStack>
          <YStack>
            <Circle p="$2" bg="#ffffffff">
              <Circle size={50} br="$full" bg="$danger" />
            </Circle>
            <Text fos={12} color="$gray600">
              Error
            </Text>
          </YStack>
        </XStack>
      </YStack>
      <YStack gap="$4">
        <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
          GRAYSCALE
        </Text>
        <XStack gap="$4" ai="center" jc="space-between">
          <YStack>
            <Circle p="$2" bg="#ffffffff">
              <Circle size={50} br="$full" bg="$gray100" />
            </Circle>
            <Text fos={12} color="$gray600">
              Gray 100
            </Text>
          </YStack>
          <YStack>
            <Circle p="$2" bg="#ffffffff">
              <Circle size={50} br="$full" bg="$gray200" />
            </Circle>
            <Text fos={12} color="$gray600">
              Gray 200
            </Text>
          </YStack>
          <YStack>
            <Circle p="$2" bg="#ffffffff">
              <Circle size={50} br="$full" bg="$gray300" />
            </Circle>
            <Text fos={12} color="$gray600">
              Gray 300
            </Text>
          </YStack>
          <YStack>
            <Circle p="$2" bg="#ffffffff">
              <Circle size={50} br="$full" bg="$gray400" />
            </Circle>
            <Text fos={12} color="$gray600">
              Gray 400
            </Text>
          </YStack>
        </XStack>
      </YStack>
    </YStack>
  )
}

export default ColorPallet
