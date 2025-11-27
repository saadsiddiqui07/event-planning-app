import { ThemedText } from '@/components/themed-text'
import { GlobalView } from '@/components/ui/global-view'

export default function HomeScreen() {
  return (
    <GlobalView>  
      <ThemedText type="title">Home</ThemedText>
      <ThemedText>Welcome to the Events App!</ThemedText>
    </GlobalView>
  )
}

