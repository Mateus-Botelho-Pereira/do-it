import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps, KeyboardAvoidingView, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme';

export function ButtonDelete({...rest} : TouchableOpacityProps){
  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableOpacity 
        activeOpacity={0.7}
        {...rest}
      >
        <MaterialCommunityIcons 
          name="delete-outline"
          color={theme.baseColors.white}
          size={24}
        />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}