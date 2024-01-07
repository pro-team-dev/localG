import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Slot, Stack, useRootNavigationState } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { getData, getValueFor } from "../utils/storage";
import { AuthContext } from "./authProvider";
import Intro from "./intro";

export type User = { username: string; email: string };

const RootLayout = () => {
  const rootNavigationState = useRootNavigationState();

  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState<User>();

  const checkLoginCredentials = async () => {
    try {
      const userData = await getData("user");
      if (userData) {
        setUser(userData as User);
      } else {
        setUser(undefined);
      }
      setAppIsReady(true);
      SplashScreen.hideAsync();
    } catch (error) {
      console.error(error);
    }
  };

  useLayoutEffect(() => {
    const fetchData = async () => {
      await checkLoginCredentials();
      // Perform navigation actions here, after the component is fully mounted.
      // For example, you can use the navigation prop if available.
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Slot />
    </AuthContext.Provider>
  );
};

export default RootLayout;
