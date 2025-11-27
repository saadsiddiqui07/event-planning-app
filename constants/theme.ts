/**
 * Partiful color palette (based on provided hex codes).
 * Variable names remain EXACTLY the same.
 */

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#2f0e6a',            // Deep purple for readable UI text
    background: '#f1e6e9',      // Soft pink base (Partiful aesthetic)
    tint: '#4c2ee4',            // Strong vivid purple (primary interactive color)
    icon: '#2f0e6a',            // Deep purple icons
    tabIconDefault: '#dcc5f0',  // Pastel purple (inactive tabs)
    tabIconSelected: '#4c2ee4', // Vivid purple (active tab)
  },

  dark: {
    text: '#c5e8fa',            // Pastel blue for dark mode text
    background: '#000000',      // Black (Partiful uses full black in dark areas)
    tint: '#4c2ee4',            // Keep vivid purple for strong contrast
    icon: '#c5e8fa',            // Light blue icons in dark mode
    tabIconDefault: '#4c2ee4',  // Purple inactive tabs for visibility
    tabIconSelected: '#dcc5f0', // Soft purple highlight on selection
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
