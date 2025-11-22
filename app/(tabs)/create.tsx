import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

export default function CreateScreen() {
  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemedText type="title">Create</ThemedText>
      <ThemedText>Create a new event.</ThemedText>
    </ThemedView>
  )
}

