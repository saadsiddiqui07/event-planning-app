import { ThemedText } from '@/components/themed-text';
import { GlobalView } from '@/components/ui/global-view';

export default function MessagesScreen() {
  return (
    <GlobalView>
      <ThemedText type="title">Messages</ThemedText>
      <ThemedText>Chat conversations will be shown here.</ThemedText>
    </GlobalView>
  );
}

