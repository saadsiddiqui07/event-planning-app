import { ThemedView } from "../themed-view";

import { AppBackground } from "./app-background";

import { ReactNode } from "react";

export function GlobalView({ children }: { children: ReactNode }) {
  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AppBackground />
      {children}
    </ThemedView>
  )
}