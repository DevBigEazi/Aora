import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  handleChanegeText,
  placeholder,
  otherStyle,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`${otherStyle} space-y-2 w-full`}>
      {/* Label */}
      <Text className="text-gray-100 text-base font-pmedium">{title}</Text>

      {/* Input field */}
      <View className="flex-row border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center">
        <TextInput
          className="w-full flex-1 text-white text-base font-psemibold"
          placeholder={placeholder}
          placeholderTextColor={"#7B7B8B"}
          value={value}
          onChangeText={handleChanegeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
