import { Text, YStack, styled, Input as TInput } from 'tamagui'

// Criamos um componente estilizado com variantes
export const StyledInput = styled(TInput, {
  name: 'StyledInput',
  h: 52,
  bw: 1,
  fos: 14,
  px: '$4',
  br: '$md', // Usa o radius do seu config
  color: '$color',
  bg: '$background',
  borderColor: '$gray200',

  // Estado de Foco Nativo
  focusStyle: {
    borderColor: '$primary',
    bw: 2,
  },

  variants: {
    error: {
      true: {
        // bc: '$danger', // ou $error conforme seu config
        borderColor: '$danger', // ou $error conforme seu config
        bw: 2,
        focusStyle: {
          borderColor: '$danger',
        },
      },
    },
  } as const,
})

// Componente composto com Label e Mensagem de Erro
export const FormInput = ({ label, error, helperText, ...props }: any) => {
  return (
    <YStack w="100%" gap="$1.5">
      {label && (
        <Text ml="$1" fos={12} fontWeight="700" color={error ? '$danger' : '$gray600'}>
          {label.toUpperCase()}
        </Text>
      )}

      <StyledInput error={!!error} {...props} />

      {error && (
        <Text ml="$1" fos={10} color="$danger" fontWeight="600">
          {error}
        </Text>
      )}

      {!error && helperText && (
        <Text ml="$1" fos={10} color="$subText" fontWeight="600">
          {helperText}
        </Text>
      )}
    </YStack>
  )
}
