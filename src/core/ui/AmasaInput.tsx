import { Platform } from 'react-native'
import React, { useState, forwardRef } from 'react'
import { Eye, EyeOff } from '@tamagui/lucide-icons'
import { Input, Button, XStack, styled } from 'tamagui'

export const AmasaInput = styled(Input, {
  name: 'AmasaInput',
  borderColor: '$borderColor',
  borderRadius: '$md',
  padding: '$md',
})

const AmasaPasswordField = styled(XStack, {
  name: 'AmasaPasswordField',
  position: 'relative',
  width: '100%',
})

const AmasaPasswordToggleContainer = styled(XStack, {
  name: 'AmasaPasswordToggleContainer',
  position: 'absolute',
  right: '$md',
  top: 0,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
})

type TamaguiInputProps = React.ComponentProps<typeof Input>

export const AmasaPasswordInput = forwardRef<any, TamaguiInputProps>((props, ref) => {
  const [hidden, setHidden] = useState(true)

  const {
    secureTextEntry: _secureTextEntry,
    type: _type,
    paddingRight,
    disabled,
    ...inputProps
  } = props as any

  const webType = Platform.OS === 'web' ? { type: hidden ? 'password' : 'text' } : {}

  return (
    <AmasaPasswordField>
      <AmasaInput
        ref={ref}
        width="100%"
        disabled={disabled}
        secureTextEntry={hidden}
        paddingVertical={paddingRight ?? 0}
        paddingRight={paddingRight ?? '$xl'}
        {...webType}
        {...inputProps}
      />
      <AmasaPasswordToggleContainer>
        <Button
          unstyled
          color="$subText"
          disabled={disabled}
          icon={hidden ? Eye : EyeOff}
          pressStyle={{ opacity: 0.7 }}
          onPress={() => setHidden((current) => !current)}
          accessibilityLabel={hidden ? 'Mostrar senha' : 'Ocultar senha'}
        />
      </AmasaPasswordToggleContainer>
    </AmasaPasswordField>
  )
})

AmasaPasswordInput.displayName = 'AmasaPasswordInput'
