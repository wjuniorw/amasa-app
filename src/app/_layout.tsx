import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { TamaguiProvider } from 'tamagui'
import { useColorScheme } from 'react-native'
import { Stack, SplashScreen } from 'expo-router'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'

import config from '../../tamagui.config'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    InterRegular: require('@tamagui/font-inter/otf/Inter-Regular.otf'),
    InterSemiBold: require('@tamagui/font-inter/otf/Inter-SemiBold.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ThemeProvider>
    </TamaguiProvider>
  )
}
