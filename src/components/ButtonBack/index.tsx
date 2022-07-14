import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme';

export function ButtonBack({...rest} : TouchableOpacityProps){
  return(
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <Ionicons 
        name="chevron-back-outline"
        color={theme.baseColors.white}
        size={24}
      />
    </TouchableOpacity>
  );
}