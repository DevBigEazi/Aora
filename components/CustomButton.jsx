import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`${containerStyle} ${
        isLoading ? "opacity-50" : ""
      } bg-secondary rounded-xl min-h-[58px] w-[100%] justify-center items-center`}>
      <Text className={`${textStyle} text-primary font-psemibold text-lg`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
