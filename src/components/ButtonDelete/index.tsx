import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme';

export function ButtonDelete({...rest} : TouchableOpacityProps){
  return(
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <MaterialCommunityIcons 
        name="delete-outline"
        color={theme.baseColors.white}
        size={24}
      />
    </TouchableOpacity>
  );
}