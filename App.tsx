import React from "react";
import { StatusBar, LogBox } from "react-native";
import { Home } from "./src/screens/Home";

// Ignora alguns avisos de warning no terminal
LogBox.ignoreLogs(['expo-app-loading is deprecated in favor of expo-splash-screen']);
LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
