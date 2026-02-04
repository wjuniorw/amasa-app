import React from 'react'
import { router } from 'expo-router'
import { Pressable, ScrollView } from 'react-native'
import { Plus, User, Banknote, ArrowLeft, Building2, TrendingUp } from '@tamagui/lucide-icons'
import { Text, Card, Theme, YStack, XStack, Button, Circle, styled, Separator } from 'tamagui'

import Heading from './components/Heading'
import CardAlert from './components/CardAlert'
import CardStatus from './components/CardStatus'
import ColorPallet from './components/ColorPallet'
import { FormInput } from './components/FormInput'
import CardFinance from './components/CardFinance'
import CurrentBalanceCard from './components/CardBalance'
import { WaterUsageCard } from './components/CardWaterUsage'
import MaintenanceAlertCard from './components/CardMaintenance'

// Componente de Card Customizado para Seleção de Residente
const ResidentCard = styled(Card, {
  f: 1,
  p: '$4',
  br: '$lg',
  ai: 'center',
  jc: 'center',
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
          <XStack p="$4" bg="white" ai="center" jc="space-between">
            <YStack ai="center" jc="center">
              <Pressable onPress={() => router.back()}>
                <ArrowLeft size={24} color="$gray900" />
              </Pressable>
            </YStack>
            <Text f={1} pr="$8" ta="center" fontWeight="700">
              AMASA UI Kit
            </Text>
          </XStack>

          <YStack p="$4" gap="$8">
            {/* Headline */}
            <YStack>
              <Text lh={38} fos={32} fontWeight="700" color="$gray900">
                Design System v1.0
              </Text>
              <Text fos={14} color="$gray600">
                Documentation for Santo André mobile app components and tokens.
              </Text>
            </YStack>

            {/* Typography Section */}
            <Heading />

            {/* Color Palette Section */}
            <ColorPallet />

            {/* Button Gallery */}
            <YStack gap="$4">
              <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
                Button Gallery
              </Text>
              <Button h={56} br="$md" bg="$primary" color="white" fontWeight="700">
                Primary Button
              </Button>
              <Button
                bw={2}
                h={56}
                br="$md"
                bg="transparent"
                color="$primary"
                fontWeight="700"
                borderColor="$primary"
              >
                Outline Button
              </Button>
              <Button
                h={56}
                br="$md"
                disabled
                bg="$gray200"
                opacity={0.5}
                color="$gray600"
                fontWeight="700"
              >
                Disabled Button
              </Button>

              <XStack mt="$2" gap="$4" ai="center">
                <Text fos={14} color="$gray600">
                  Floating Action Button:
                </Text>
                <Button elevate circular size="$5" icon={Plus} bg="$primary" color="white" />
              </XStack>
            </YStack>

            <YStack p="$4" gap="$5">
              <Text fos={12} tt="uppercase" fontWeight="700" color="$subText">
                Input States
              </Text>
              {/* Estado Default */}
              <FormInput label="Default" placeholder="Digite seu nome completo" />

              {/* Estado Focado (Simulado visualmente ou apenas demonstrativo) */}
              <FormInput
                label="Focused"
                borderWidth={2}
                borderColor="$primary"
                defaultValue="Santo André"
              />

              {/* Estado de Erro */}
              <FormInput
                label="Error"
                defaultValue="invalid-email"
                error="Por favor, insira um e-mail válido."
              />
            </YStack>

            {/* Resident Selection */}
            <YStack gap="$4">
              <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
                Resident Type Selection
              </Text>
              <XStack gap="$4">
                <ResidentCard>
                  <Circle size={48} bg="$gray100">
                    <User color="$gray600" />
                  </Circle>
                  <Text mt="$2" fos={14} fontWeight="700">
                    Resident
                  </Text>
                  <Text fos={12} ta="center" color="$gray600">
                    Lives in Santo André
                  </Text>
                </ResidentCard>

                <ResidentCard active>
                  <Circle size={48} bg="$primary">
                    <Building2 color="white" />
                  </Circle>
                  <Text mt="$2" fos={14} fontWeight="700" color="$primary">
                    Property Owner
                  </Text>
                  <Text fos={12} ta="center" opacity={0.7} color="$primary">
                    Owns local estate
                  </Text>
                </ResidentCard>
              </XStack>
            </YStack>

            {/* Financial Card */}
            <YStack gap="$4">
              <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
                Financial Overview Card
              </Text>
              <CardFinance />
            </YStack>

            <YStack gap="$4">
              <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
                Water Usage Card
              </Text>
              <WaterUsageCard />
            </YStack>

            <YStack gap="$4">
              <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
                Current Balance Card
              </Text>
              <CurrentBalanceCard />
            </YStack>

            <YStack gap="$4">
              <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
                Maintenance Alert Card
              </Text>
              <MaintenanceAlertCard />
            </YStack>

            <YStack gap="$4">
              <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
                Alert Card
              </Text>
              <CardAlert />
            </YStack>

            <YStack gap="$4">
              <Text fos={12} tt="uppercase" fontWeight="700" color="$gray600">
                Status Card
              </Text>
              <CardStatus />
            </YStack>
          </YStack>
        </YStack>
      </ScrollView>
    </Theme>
  )
}
