import React from 'react';
import { styles } from './styles';
import { View, TouchableOpacity, TouchableOpacityProps, KeyboardAvoidingView, Platform } from "react-native";
import { Fontisto } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme';

export function ButtonSave({...rest} : TouchableOpacityProps){
  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableOpacity 
        {...rest}
      >
        <Fontisto 
          name="save"
          color={theme.baseColors.black}
          size={32}
        />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}