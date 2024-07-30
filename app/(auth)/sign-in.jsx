import { View, Text, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!form.email || !form.password)
      return Alert.alert("Error", "All fields are required!");

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);

      // set it to global state...
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="justify-start items-start w-full h-full px-6 my-16">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Text className="mt-10 text-white text-2xl text-center font-psemibold">
            Sign In
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChanegeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            otherStyle="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChanegeText={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
            otherStyle="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={handleSubmit}
            isLoading={isSubmitting}
            containerStyle="mt-7"
          />

          <View className="flex-row gap-2 pt-5 justify-center">
            <Text className="text-gray-100 text-lg font-pregular">
              {" "}
              Don't have an account?{" "}
            </Text>
            <Link
              href="/sign-up"
              className="text-secondary text-lg font-psemibold">
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
