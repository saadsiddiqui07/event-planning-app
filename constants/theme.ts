/**
 * Partiful-inspired color palette replacement
 * Variable names remain EXACTLY the same as Expo's default theme.
 */

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#1A1523',            // Deep gray-purple (Partiful text tone)
    background: '#FFFFFF',      // Clean white background
    tint: '#A259FF',            // Main Partiful purple
    icon: '#7A7490',            // Muted lavender-gray icons
    tabIconDefault: '#9C93B5',  // Subtle default tab
    tabIconSelected: '#A259FF', // Same purple as tint
  },
  dark: {
    text: '#F2E9FF',            // Soft lavender-white
    background: '#0F0A1E',      // Deep cosmic purple
    tint: '#C29FFF',            // Light glowing purple
    icon: '#B8A8D9',            // Muted pastel-lavender icon
    tabIconDefault: '#B8A8D9',  // Neutral lavender
    tabIconSelected: '#D9C6FF', // Brighter purple accent
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
