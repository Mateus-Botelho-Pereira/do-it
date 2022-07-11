import React from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export type PostItProps = {
  id: 'string',
  content: 'string',
  color: 'string',
}

type Props = TouchableOpacityProps & {
  data: PostItProps;
}

export function PostIt({...rest}: Props){
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: 'gray'}]}>
      <Text style={styles.text}>Mateus Mateus Mateus Mateus Mateus Mateus Mateus Mateus Mateus Mateus Mateus </Text>
    </TouchableOpacity>
  );
}