import { ThemedText } from '@/components/themed-text'
import AppHeader from '@/components/ui/app-header'
import { GlobalView } from '@/components/ui/global-view'

export default function HomeScreen() {
  return (
    <GlobalView>  
      <AppHeader />
      <ThemedText type="title">Home</ThemedText>
      <ThemedText>Welcome to the Events App!</ThemedText>
    </GlobalView>
  )
}

