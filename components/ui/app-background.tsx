import { useColorScheme } from '@/hooks/use-color-scheme'
import { LinearGradient } from 'expo-linear-gradient'
import { View, type ColorValue } from 'react-native'

export function AppBackground() {
  const scheme = useColorScheme()
  const isDark = scheme === 'dark'
  const colors: readonly [ColorValue, ColorValue] = isDark
    ? ['rgba(76,46,228,0.55)', 'rgba(0,0,0,0)']
    : ['rgba(255,182,193,0.7)', 'rgba(241,230,233,0)']
  return (
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
      <LinearGradient
        colors={colors}
        start={{ x: 0.5, y: 0.2 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1 }}
      />
    </View>
  )
}
