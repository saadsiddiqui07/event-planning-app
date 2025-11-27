import { ThemedText } from '@/components/themed-text'
import { GlobalView } from '@/components/ui/global-view'

export default function EventsScreen() {
  return (
    <GlobalView>
      <ThemedText type="title">Events</ThemedText>
      <ThemedText>Browse your upcoming events.</ThemedText>
    </GlobalView>
  )
}

