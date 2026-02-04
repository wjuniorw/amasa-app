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

import Heading from './components/Heading'
import CardAlert from './components/CardAlert'
import CardStatus from './components/CardStatus'
import ColorPallet from './components/ColorPallet'
import { FormInput } from './components/FormInput'
import CurrentBalanceCard from './components/CardBalance'
import { WaterUsageCard } from './components/CardWaterUsage'
import MaintenanceAlertCard from './components/CardMaintenance'

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
          <XStack p="$4" bg="white" ai="center" jc="space-between">
            <ArrowLeft size={24} color="$gray900" />
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
            </YStack>

            <WaterUsageCard />

            <CurrentBalanceCard />

            <MaintenanceAlertCard />

            <CardAlert />

            <CardStatus />
          </YStack>
        </YStack>
      </ScrollView>
    </Theme>
  )
}
