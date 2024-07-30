import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;
