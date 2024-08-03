import { View, Text, Image } from "react-native";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="px-4 justify-center items-center">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[270px] h-[220px]"
      />
      <Text className="text-sm font-pmedium text-gray-100 ">{subtitle}</Text>
      <Text className="text-xl font-psemibold text-white mt-2">{title}</Text>
      <CustomButton
        title="Create Video"
        containerStyle="mt-5 w-full"
        handlePress={() => router.push("/create")}
      />
    </View>
  );
};

export default EmptyState;
