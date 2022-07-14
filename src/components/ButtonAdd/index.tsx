import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme';

export function ButtonAdd({...rest} : TouchableOpacityProps){
  return(
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <MaterialCommunityIcons 
        name="plus"
        color={theme.baseColors.black}
        size={32}
      />
    </TouchableOpacity>
  );
}