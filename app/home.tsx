import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Dashboard = () => {
  const handleItemClick = (item) => {
    alert(`Clicked on ${item}`);
  };

  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default Dashboard;
