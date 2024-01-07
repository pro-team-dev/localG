import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Dashboard = () => {
  const handleItemClick = (item: any) => {
    alert(`Clicked on ${item}`);
  };

  return (
    <SafeAreaView>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        perspiciatis inventore eum dolorem ipsum ea veritatis, facere
        praesentium voluptates enim laudantium dolores! Consequuntur eius iste
        pariatur ut molestias laudantium ex?
      </Text>
    </SafeAreaView>
  );
};

export default Dashboard;
