import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router/tabs";
import { StyleSheet, Text } from "react-native";
import { View } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

export default function AppLayout() {
  const config = {
    headerRight() {
      return (
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <View className="w-10 h-10 bg-slate-200 rounded-full mr-5"></View>
        </TouchableOpacity>
      );
    },
  };

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
          ...config,
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          title: "Maps",
          tabBarIcon: () => <AntDesign name="API" size={24} color="black" />,
          ...config,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
