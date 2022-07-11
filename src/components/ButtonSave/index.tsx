import React from 'react';
import { styles } from './styles';
import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme';

export function ButtonSave({...rest} : TouchableOpacityProps){
  return(
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <MaterialCommunityIcons 
        name="square-edit-outline"
        color={theme.baseColors.black}
        size={32}
      />
    </TouchableOpacity>
  );
}