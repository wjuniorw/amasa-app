import { shorthands } from '@tamagui/shorthands'
import { createInterFont } from '@tamagui/font-inter'
import { createTokens, createTamagui } from 'tamagui'
import { themes, tokens as defaultTokens } from '@tamagui/themes'

const headingFont = createInterFont({
  size: { 1: 12, 2: 14, 3: 16, 4: 20, 5: 24, 6: 30, 7: 32 },
  transform: { 6: 'uppercase' },
  weight: { 1: '400', 3: '700' },
  face: {
    400: { normal: 'InterRegular' },
    700: { normal: 'InterBold' },
  },
})

const bodyFont = createInterFont({
  size: { 1: 12, 2: 14, 3: 16, 4: 18 },
  weight: { 1: '400', 2: '600' },
  face: {
    400: { normal: 'InterRegular' },
    600: { normal: 'InterSemiBold' },
  },
})

const customTokens = createTokens({
  ...defaultTokens,
  color: {
    ...defaultTokens.color,
    // Cores da Marca (Brand)
    primary: '#0066CC',
    primaryLight: '#E0F2FE',
    primaryDark: '#004C99',
    // Feedback e Semântica
    success: '#22C55E',
    warning: '#EAB308',
    danger: '#EF4444',
    // Grayscale do Design System
    gray900: '#101418',
    gray600: '#5E758D',
    gray200: '#E5E7EB',
    gray100: '#F3F4F6',
    // UI Tokens
    text: '#101418',
    subText: '#5E758D',
    background: '#F5F7F8',
    backgroundDark: '#0F1923',
  },
  radius: {
    ...defaultTokens.radius,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },
  space: {
    ...defaultTokens.space,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
})

const config = createTamagui({
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  tokens: customTokens,
  themes: {
    light: {
      ...themes.light,
      color: customTokens.color.text,
      primary: customTokens.color.primary,
      borderColor: customTokens.color.gray200,
      background: customTokens.color.background,
    },
    dark: {
      ...themes.dark,
      color: '#FFFFFF',
      primary: customTokens.color.primary,
      background: customTokens.color.backgroundDark,
    },
  },
  shorthands,
  only: ['react-native'],
})

export type AppConfig = typeof config
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
export default config
