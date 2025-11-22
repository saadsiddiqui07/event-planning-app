import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

export default function ProfileScreen() {
  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemedText type="title">Profile</ThemedText>
      <ThemedText>Manage your account settings.</ThemedText>
    </ThemedView>
  )
}

