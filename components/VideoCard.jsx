import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";
import { useState } from "react";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creators: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-center">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              resizeMode="cover"
              className="h-full w-full rounded-lg"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-sm font-psemibold text-white"
              numberOfLines={1}>
              {title}
            </Text>
            <Text
              className="text-xs font-pregular text-gray-100"
              numberOfLines={1}>
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} resizeMode="contain" className="w-5 h-5" />
        </View>
      </View>

      {play ? (
        <Text className="text-white">Playing...</Text>
      ) : (
        <TouchableOpacity
          className="h-60 w-full relative mt-3 rounded-xl flex justify-center items-center"
          onPress={() => setPlay(true)}
          activeOpacity={0.7}>
          <Image
            source={{ uri: thumbnail }}
            resizeMode="cover"
            className="w-full h-full rounded-xl mt-3 "
          />
          <Image
            source={icons.play}
            resizeMode="contain"
            className="absolute w-12 h-12"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
