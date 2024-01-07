import { View, Text, ActivityIndicator, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Intro from "./intro";
import useAuth from "./hooks/useAuth";
import {
  Stack,
  router,
  useNavigation,
  useRootNavigationState,
} from "expo-router";
import CustomButton from "../components/CustomButton";

const Index = () => {
  const rootNavigationState = useRootNavigationState();
  const { isLoading, user, logout } = useAuth();
  useEffect(() => {
    if (!isLoading) {
      if (user && rootNavigationState) {
        router.replace("/home");
      }
    }
  });
  const handleSetUserType = () => {
    router.replace("/signup");
  };
  // if (isLoading) {
  //   return (
  //     <View className="flex-1 justify-center items-center">
  //       <ActivityIndicator size={"small"} />
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView className="flex-1">
      <View className="items-center mt-16">
        <Image className="" source={require("../assets/images/logo1.jpg")} />
      </View>
      <Text className="text-2xl text-center mt-24">Whom do you want to be</Text>
      <View className=" items-center gap-5 z-20 mt-6">
        <CustomButton
          title="GUIDE"
          style={{ borderRadius: 30, paddingVertical: 15, width: 200 }}
          onPress={handleSetUserType}
        />
        <CustomButton
          title="Tourist"
          style={{ borderRadius: 30, paddingVertical: 15, width: 200 }}
          onPress={handleSetUserType}
        />
      </View>
      <View className="absolute -bottom-[160px] -left-[720px] z-10">
        <Image className="" source={require("../assets/images/tourist.png")} />
      </View>
    </SafeAreaView>
  );
};

export default Index;
