import React from 'react'
import { ScrollView } from 'react-native'
import { Plus, User, Banknote, ArrowLeft, Building2, TrendingUp } from '@tamagui/lucide-icons'
import {
  Text,
  Card,
  Input,
  Theme,
  YStack,
  XStack,
  Button,
  Circle,
  styled,
  Separator,
} from 'tamagui'

// Componente de Card Customizado para Seleção de Residente
const ResidentCard = styled(Card, {
  p: '$4',
  br: '$lg',
  ai: 'center',
  jc: 'center',
  f: 1,
  borderWidth: 1,
  borderColor: '$gray200',
  pressStyle: { scale: 0.98 },

  variants: {
    active: {
      true: {
        bg: '$primaryLight',
        borderColor: '$primary',
        bw: 2,
      },
    },
  } as const,
})

export default function AmasaDesignSystem() {
  return (
    <Theme name="light">
      <ScrollView style={{ backgroundColor: '#F5F7F8' }}>
        <YStack f={1} pb="$10">
          {/* Top Bar */}
          <XStack p="$4" ai="center" bg="white" jc="space-between">
            <ArrowLeft size={24} color="$gray900" />
            <Text fontWeight="700" f={1} ta="center" pr="$8">
              AMASA UI Kit
            </Text>
          </XStack>

          <YStack p="$4" gap="$8">
            {/* Headline */}
            <YStack>
              <Text fos={32} fontWeight="700" lh={38} color="$gray900">
                Design System v1.0
              </Text>
              <Text color="$gray600" fos={14}>
                Documentation for Santo André mobile app components and tokens.
              </Text>
            </YStack>

            {/* Typography Section */}
            <YStack gap="$3">
              <Text fos={22} fontWeight="700">
                Typography
              </Text>
              <YStack
                bg="white"
                br="$lg"
                ov="hidden"
                separator={<Separator borderColor="$gray100" />}
              >
                <XStack p="$4" jc="space-between" ai="center">
                  <YStack>
                    <Text fos={20} fontWeight="700">
                      H1 - Headline Large
                    </Text>
                    <Text color="$gray600" fos={14}>
                      The quick brown fox jumps...
                    </Text>
                  </YStack>
                  <Text fos={12} color="$gray600" opacity={0.6}>
                    24PT
                  </Text>
                </XStack>
                {/* Repetir para H2, Body, etc conforme sua necessidade */}
              </YStack>
            </YStack>

            {/* Button Gallery */}
            <YStack gap="$4">
              <Text fos={12} fontWeight="700" color="$gray600" tt="uppercase">
                Button Gallery
              </Text>
              <Button bg="$primary" color="white" fontWeight="700" h={56} br="$md">
                Primary Button
              </Button>
              <Button
                bg="transparent"
                bc="$primary"
                bw={2}
                color="$primary"
                fontWeight="700"
                h={56}
                br="$md"
              >
                Outline Button
              </Button>
              <Button
                bg="$gray200"
                color="$gray600"
                fontWeight="700"
                h={56}
                br="$md"
                disabled
                opacity={0.5}
              >
                Disabled Button
              </Button>

              <XStack ai="center" gap="$4" mt="$2">
                <Text fos={14} color="$gray600">
                  Floating Action Button:
                </Text>
                <Button circular icon={Plus} size="$5" bg="$primary" color="white" elevate />
              </XStack>
            </YStack>

            {/* Resident Selection */}
            <YStack gap="$4">
              <Text fos={12} fontWeight="700" color="$gray600" tt="uppercase">
                Resident Type Selection
              </Text>
              <XStack gap="$4">
                <ResidentCard>
                  <Circle size={48} bg="$gray100">
                    <User color="$gray600" />
                  </Circle>
                  <Text fontWeight="700" fos={14} mt="$2">
                    Resident
                  </Text>
                  <Text fos={12} color="$gray600" ta="center">
                    Lives in Santo André
                  </Text>
                </ResidentCard>

                <ResidentCard active>
                  <Circle size={48} bg="$primary">
                    <Building2 color="white" />
                  </Circle>
                  <Text fontWeight="700" fos={14} mt="$2" color="$primary">
                    Property Owner
                  </Text>
                  <Text fos={12} color="$primary" ta="center" opacity={0.7}>
                    Owns local estate
                  </Text>
                </ResidentCard>
              </XStack>
            </YStack>

            {/* Financial Card */}
            <YStack gap="$4">
              <Text fos={12} fontWeight="700" color="$gray600" tt="uppercase">
                Financial Overview Card
              </Text>
              <Card
                p="$6"
                bg="white"
                br="$xl"
                elevate
                shadowColor="$gray900"
                shadowOpacity={0.1}
                shadowRadius={10}
              >
                <XStack jc="space-between" ai="flex-start">
                  <YStack>
                    <Text fos={12} color="$gray600" fontWeight="500">
                      Total Balance
                    </Text>
                    <Text fos={28} fontWeight="700">
                      R$ 1.450,20
                    </Text>
                  </YStack>
                  <Circle size={40} bg="#22C55E15">
                    <TrendingUp color="$success" size={20} />
                  </Circle>
                </XStack>

                <Separator my="$4" bc="$gray100" />

                <XStack jc="space-between" ai="center">
                  <XStack ai="center" gap="$3">
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
                  <Text color="$primary" fontWeight="700" fos={12}>
                    View Bill
                  </Text>
                </XStack>
              </Card>
            </YStack>
          </YStack>
        </YStack>
      </ScrollView>
    </Theme>
  )
}
