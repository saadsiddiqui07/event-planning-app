import { Pressable, StyleSheet, View } from "react-native";

import { useColorScheme } from "@/hooks/use-color-scheme";

import { router } from "expo-router";
import { IconSymbol } from "./icon-symbol";

import { Colors } from "@/constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// create a simple header with an Icon on left and two icons on right extreme side
const AppHeader = () => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.header, { top: insets.top }]}
    >
      <IconSymbol
        size={28}
        name="leaf.arrow.circlepath"
        color={Colors[colorScheme ?? "light"].tabIconSelected}
      />
      <View style={styles.iconContainer}>
        <Pressable accessibilityRole="button" onPress={() => router.push("/notifications")} hitSlop={8}>
          <IconSymbol
            size={28}
            name="bell.fill"
            color={Colors[colorScheme ?? "light"].icon}
          />
        </Pressable>
        <Pressable accessibilityRole="button" onPress={() => router.push("/messages")} hitSlop={8}>
          <IconSymbol
            size={28}
            name="bubble.left.fill"
            color={Colors[colorScheme ?? "light"].icon}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "absolute",
    left: 0,
    right: 0,
    height: 60,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});

export default AppHeader;
