import React from 'react'
import { AmasaPasswordInput } from '@core/ui'
import { Lock, Mail } from '@tamagui/lucide-icons'
import { Platform, KeyboardAvoidingView } from 'react-native'
import { Text, Input, Image, YStack, Button, XStack, Spinner } from 'tamagui'

import AmasaIcon from '@/assets/images/icon.png'

import { useLoginViewModel } from './login-view-model'

interface LoginViewProps {
  vm: ReturnType<typeof useLoginViewModel>
  onNavigateToRegister: () => void
  onSuccess: () => void
}

export const LoginView = ({ vm, onNavigateToRegister, onSuccess }: LoginViewProps) => {
  // const theme = useTheme()

  return (
    <YStack f={1} p="$6" jc="center" bg="$background">
      <KeyboardAvoidingView behavior={Platform.OS !== 'ios' ? 'padding' : 'height'}>
        <YStack mb="$8" space="$2" ai="center">
          <YStack w={100} h={100} mb="$4" br="$full" ai="center" jc="center" bg="$primaryLight">
            <Image w={80} h={80} source={AmasaIcon} resizeMode="contain" />
          </YStack>
          <Text fontSize="$6" color="$primary" fontWeight="bold">
            AMASA
          </Text>
          <Text color="$subText" textAlign="center">
            Associação de Moradores e Amigos de Santo André
          </Text>
        </YStack>

        {/* Form Area */}
        <YStack space="$4">
          <YStack>
            <XStack mb="$2" space="$2" ai="center">
              <Mail size={16} color="$subText" />
              <Text fontSize="$3" color="$subText">
                E-mail
              </Text>
            </XStack>
            <Input
              size="$4"
              value={vm.email}
              autoCapitalize="none"
              onChangeText={vm.setEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
            />
          </YStack>

          <YStack>
            <XStack mb="$2" space="$2" ai="center">
              <Lock size={16} color="$subText" />
              <Text fontSize="$3" color="$subText">
                Senha
              </Text>
            </XStack>
            <AmasaPasswordInput
              size="$4"
              value={vm.password}
              placeholder="******"
              onChangeText={vm.setPassword}
            />
          </YStack>

          {vm.error && (
            <YStack p="$3" br="$sm" bg="$red3">
              <Text fontSize="$3" color="$red10">
                {vm.error}
              </Text>
            </YStack>
          )}

          <Button
            mt="$4"
            bg="$primary"
            disabled={vm.isLoading}
            pressStyle={{ opacity: 0.8 }}
            onPress={() => vm.handleLogin(onSuccess)}
          >
            {vm.isLoading ? (
              <Spinner color="white" />
            ) : (
              <Text color="white" fontWeight="bold">
                Entrar
              </Text>
            )}
          </Button>

          <Button mt="$4" unstyled ai="center" onPress={onNavigateToRegister}>
            <Text color="$subText">
              Não tem conta?{' '}
              <Text color="$primary" fontWeight="bold">
                Cadastre-se
              </Text>
            </Text>
          </Button>
        </YStack>
      </KeyboardAvoidingView>
    </YStack>
  )
}
