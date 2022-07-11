import React from 'react';
import { styles } from './styles';
import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Octicons } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme';

export function ButtonSettings({...rest} : TouchableOpacityProps){
  return(
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <Octicons 
        name="gear"
        color={theme.baseColors.white}
        size={24}
      />
    </TouchableOpacity>
  );
}