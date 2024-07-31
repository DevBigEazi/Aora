import { View, Text, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setUser, setIsLoggedIn } = useGlobalContext();

  const handleSubmit = async () => {
    if (!form.username || !form.email || !form.password)
      return Alert.alert("Error", "The fields can not be empty!");

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);

      // set to global state...
      setUser(result);
      setIsLoggedIn(true);

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
            Sign Up
          </Text>

          <FormField
            title="Username"
            value={form.username}
            placeholder="Your unique username"
            handleChanegeText={(e) =>
              setForm({
                ...form,
                username: e,
              })
            }
            otherStyle="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChanegeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            keyboardType="email-address"
            otherStyle="mt-7"
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
            title="Sign Up"
            handlePress={handleSubmit}
            isLoading={isSubmitting}
            containerStyle="mt-7"
          />

          <View className="flex-row gap-2 pt-5 justify-center">
            <Text className="text-gray-100 text-lg font-pregular">
              {" "}
              Already have an account?{" "}
            </Text>
            <Link
              href="/sign-in"
              className="text-secondary text-lg font-psemibold">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
