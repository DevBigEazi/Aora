import { Redirect, router } from "expo-router";
import { Button, Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

import "react-native-url-polyfill/auto";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* contentContainerStyle={{ height: "100%" }} for Scroll view wont make it work on android */}
      <ScrollView>
        <View className="min-h-[95vh] w-full justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-white font-bold text-3xl text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="conatain"
            />
          </View>

          <Text className="text-gray-100 text-sm mt-7 font-pregular text-center ">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyle="mt-7 w-full"
          />
        </View>

        <StatusBar backgroundColor="#161622" barStyle="light-content" />
      </ScrollView>
    </SafeAreaView>
  );
}
