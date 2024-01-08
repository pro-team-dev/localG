import { View, Text } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import CustomButton from "../../components/CustomButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const Index = () => {
  const { logout } = useAuth();
  return (
    <View>
      <Text>Index</Text>
      <CustomButton title="logout" onPress={() => logout()} />
    </View>
  );
};

export default Index;
