import React from "react";

import { theme } from "../global/styles/theme";

import { AppRoutes } from "./app.routes";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.baseColors.white,
  },
};

export function Routes(){
  return(
    <NavigationContainer theme={navTheme}>
      <AppRoutes/>
    </NavigationContainer>
  );
}