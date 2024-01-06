import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import InputWithLogo from "../components/InputWithLogo";
import useAuth from "./hooks/useAuth";
import ImagePickerExample from "../components/CImagePicker";
import CustomButton from "../components/CustomButton";
import { StatusBar, setStatusBarHidden } from "expo-status-bar";
import { CheckBox } from "react-native-btr";
import Colors from "../constants/Colors";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user, login } = useAuth();
  const [checked, setChecked] = useState(false);

  const handleRegister = () => {
    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password doesnot match");
      return;
    }
    login(username, password);
  };

  return (
    <>
      <KeyboardAvoidingView className="flex-1">
        <View>
          <Image
            className="absolute -top-[290px] -left-[250px]"
            source={require("../assets/images/registerVector.jpg")}
          />
        </View>
        <View className={"p-4 mt-auto mb-auto mx-5"}>
          <Text className="text-3xl text-center -mt-5 mb-6 font-bold">
            Register
          </Text>
          <InputWithLogo
            logo="user"
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Username"
          />
          <InputWithLogo
            logo="user"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
          <InputWithLogo
            logo="lock"
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={true}
          />
          <InputWithLogo
            logo="unlock"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <View className="flex-row justify-center mt-5">
            <View className="w-5 rounded-md mb-5 mr-5">
              <CheckBox
                checked={checked}
                onPress={() => setChecked(!checked)}
                color={Colors.primary.btn}
              />
            </View>
            <Text>I read & agree to the</Text>
            <Text className="text-blue-500 font-bold ml-1">
              terms & conditions
            </Text>
          </View>

          <CustomButton
            title="Create Account"
            onPress={handleRegister}
            style={{ width: 300, alignSelf: "center", borderRadius: 40 }}
          />

          <View className="flex-row items-center mb-10 gap-3 justify-center mt-5">
            <Text className={"text-sm"}>Already have an account?</Text>
            <Link className="text-blue-500 font-bold" href={"/login"}>
              Login
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
