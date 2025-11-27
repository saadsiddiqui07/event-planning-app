import { ThemedText } from '@/components/themed-text';
import { GlobalView } from '@/components/ui/global-view';

export default function NotificationsScreen() {
  return (
    <GlobalView>
      <ThemedText type="title">Notifications</ThemedText>
      <ThemedText>Your alerts and updates appear here.</ThemedText>
    </GlobalView>
  );
}

