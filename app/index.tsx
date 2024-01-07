import { View, Text, ActivityIndicator } from "react-native";
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

const Index = () => {
  const rootNavigationState = useRootNavigationState();
  const { isLoading, user, logout } = useAuth();
  useEffect(() => {
    if (!isLoading) {
      console.log(user);
      if (!user && rootNavigationState) {
        router.replace("/login");
      }
      if (user && rootNavigationState) {
        router.replace("/home");
      }
    }
  });
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size={"small"} />
      </View>
    );
  }

  // return (
  //   <Stack initialRouteName="intro">
  //     <Stack.Screen name="intro" options={{ headerShown: false }} />
  //     <Stack.Screen name="login" options={{ headerShown: false }} />
  //     <Stack.Screen name="signup" options={{ headerShown: false }} />
  //   </Stack>
  // );
};

export default Index;
