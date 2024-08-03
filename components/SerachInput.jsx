import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons, images } from "../constants";

const SearchInput = ({
  title,
  value,
  handleChanegeText,
  placeholder,
  otherStyle,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-row border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center space-x-4">
      <TextInput
        className="text-base flex-1 text-white mt-0.5 font-pregular"
        placeholder="Search for a video topic"
        placeholderTextColor={"#CDCDE0"}
        value={value}
        onChangeText={handleChanegeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity>
        <Image source={icons.search} resizeMode="contain" className="w-5 h-5" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
