import { shorthands } from '@tamagui/shorthands';
import { createInterFont } from '@tamagui/font-inter';
import { createTamagui, createTokens } from 'tamagui';
import { tokens as defaultTokens, themes } from '@tamagui/themes';

const headingFont = createInterFont({
    size: { 1: 12, 2: 14, 3: 16, 4: 20, 5: 24, 6: 30 },
    transform: { 6: 'uppercase' },
    weight: { 1: '400', 3: '700' },
    face: {
        400: { normal: 'InterRegular' },
        700: { normal: 'InterBold' },
    },
});

const bodyFont = createInterFont({
    size: { 1: 12, 2: 14, 3: 16, 4: 18 },
    weight: { 1: '400', 2: '600' },
    face: {
        400: { normal: 'InterRegular' },
        600: { normal: 'InterSemiBold' },
    },
});

const customTokens = createTokens({
    ...defaultTokens,
    color: {
        ...defaultTokens.color,
        primary: '#0066CC',
        primaryLight: '#E0F2FE',
        primaryDark: '#004C99',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        text: '#1E293B',
        subText: '#64748B',
        background: '#FFFFFF',
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
    }
});

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
            borderColor: customTokens.color.subText,
            background: customTokens.color.background,
        },
        dark: {
            ...themes.dark,
            primary: customTokens.color.primary,
        }
    },
    shorthands,
    only: ['react-native'],
});

export type AppConfig = typeof config;

declare module 'tamagui' {
    interface TamaguiCustomConfig extends AppConfig { }
}

export default config;
