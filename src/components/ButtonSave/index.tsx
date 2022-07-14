import React from 'react';
import { styles } from './styles';
import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Fontisto } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme';

export function ButtonSave({...rest} : TouchableOpacityProps){
  return(
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <Fontisto 
        name="save"
        color={theme.baseColors.black}
        size={32}
      />
    </TouchableOpacity>
  );
}