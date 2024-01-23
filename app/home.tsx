import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import CustomButton from "../components/CustomButton";
import useAuth from "./hooks/useAuth";
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(
  "sk.eyJ1IjoiYWxsd2NvbnMiLCJhIjoiY2xybHpoejUwMGxhcDJqb2p6Z200bWtmaCJ9.bY2hOS6FBtVv6ggKiUmr7g"
);

const Dashboard = () => {
  const { logout } = useAuth();
  const handleItemClick = (item) => {
    alert(`Clicked on ${item}`);
  };
  return (
    <SafeAreaView className="mt-10">
      <CustomButton title="Logout" onPress={() => logout()} />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        perspiciatis inventore eum dolorem ipsum ea veritatis, facere
        praesentium voluptates enim laudantium dolores! Consequuntur eius iste
        pariatur ut molestias laudantium ex?
      </Text>
      <View
        style={{ flex: 1, width: "100%", height: 100, backgroundColor: "red" }}
      >
        <Mapbox.MapView style={{ flex: 1 }} />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
