import { ThemedText } from '@/components/themed-text'
import { GlobalView } from '@/components/ui/global-view'

export default function CreateScreen() {
  return (
    <GlobalView>
      <ThemedText type="title">Create</ThemedText>
      <ThemedText>Create a new event.</ThemedText>
    </GlobalView>
  )
}

