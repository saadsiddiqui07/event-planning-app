import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

export default function EventsScreen() {
  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemedText type="title">Events</ThemedText>
      <ThemedText>Browse your upcoming events.</ThemedText>
    </ThemedView>
  )
}

