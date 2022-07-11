import React from "react";
import { StatusBar, LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Routes } from "./src/routes";

// Ignora alguns avisos de warning no terminal
LogBox.ignoreLogs(['expo-app-loading is deprecated in favor of expo-splash-screen']);
LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if(!fontsLoaded){
    return<AppLoading/>
  }

  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
