import { Stack } from "expo-router";
import "../styles/global.css";

export default function RootLayout() {
  // return <Stack screenOptions={{ headerShown: false }} />;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
  