import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Slot, Stack, useRootNavigationState } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { getData, getValueFor } from "../utils/storage";
import { AuthContext } from "./providers/authProvider";
import Intro from "./intro";

export type User = { username: string; email: string };

const RootLayout = () => {
  const rootNavigationState = useRootNavigationState();

  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState<User>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Slot />
    </AuthContext.Provider>
  );
};

export default RootLayout;
