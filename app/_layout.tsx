import { TaskProvider } from "@/hooks/useData";
import { ThemeProvider } from '@/hooks/useTheme';
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <TaskProvider>
      <ThemeProvider>
        <Stack >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </TaskProvider>)
}
