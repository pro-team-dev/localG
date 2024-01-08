import { View, Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors, * as COLORS from "../constants/Colors";

type CustomButtonType = {
  onPress?: () => void;
  title: string;
  type?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const CustomButton = (props: CustomButtonType) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.btn,
          props.style ? props.style : {},
          props.disabled ? { backgroundColor: Colors.primary.bg } : {},
        ]}
        onPress={props.disabled ? undefined : props.onPress}
      >
        <Text className={"text-white text-lg text-center"}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.default.primary.btn,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 144,
    borderRadius: 5,
    marginHorizontal: "auto",
  },
});

export default CustomButton;
