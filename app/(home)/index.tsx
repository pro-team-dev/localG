import { View, Text } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import CustomButton from "../../components/CustomButton";

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
