import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-3xl text-white font-pextrabold">Hello Aora</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-secondary-100">
        Go to home
      </Link>
    </View>
  );
}
