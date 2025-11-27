import { ThemedText } from '@/components/themed-text'
import { GlobalView } from '@/components/ui/global-view'

export default function ProfileScreen() {
  return (
    <GlobalView>
      <ThemedText type="title">Profile</ThemedText>
      <ThemedText>Manage your account settings.</ThemedText>
    </GlobalView>
  )
}

