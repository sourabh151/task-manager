import { TaskProvider } from "@/hooks/useData";
import { ThemeProvider, useTheme } from '@/hooks/useTheme';
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context"
import { createHomeStyles } from '@/assets/styles/home.styles'

export default function RootLayout() {
  const { colors } = useTheme()
  const styles = createHomeStyles(colors);
  return (
    <TaskProvider>
      <ThemeProvider>
        <SafeAreaView style={styles.container}>
          <Stack >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </ThemeProvider>
    </TaskProvider>)
}
