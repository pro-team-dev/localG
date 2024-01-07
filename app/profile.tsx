import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '../components/CustomButton';
import UploadImage from '../components/CImagePicker';
import UploadProfileImage from '../components/UploadProfileImage';
import UploadBackgroundImage from '../components/uploadBackgroundImage';
import {
  router,
} from "expo-router";
import useStore from "./hooks/useStore";



const Profile: React.FC = () => {
  const navigation = useNavigation();
  const { userType, setUserType } = useStore();
  const [photoUri, setPhotoUri] = useState<string | undefined>(undefined); // Store the URI of the selected photo

  // Function to handle photo selection
  const handlePhotoSelection = async () => {
    const result = (await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })) as ImagePicker.ImagePickerResult;

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  const [fontsLoaded] = useFonts({
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

      <UploadBackgroundImage />
      <UploadProfileImage />
      <Text style={styles.username}>Anuj Paudel</Text>
      <Text style={styles.email}>anuj@gmail.com</Text>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    paddingTop: 50,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: 'black',
    position: "absolute"
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 30,
    top: 35,
    left: 20,
    zIndex: 1,
    backgroundColor: "white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButtonText: {
    top: -4,
    fontSize: 25,
    color: 'black',
  },
  username: {
    position:"absolute",
    paddingTop: Dimensions.get('window').height/2.6 - 100,
    fontSize: 20,
    color: "white",

  },
  email: {
    position: "absolute",
    paddingTop: Dimensions.get('window').height/2.6 - 70,
    fontSize: 13,
    color: "white",
  },
});

export default Profile;
