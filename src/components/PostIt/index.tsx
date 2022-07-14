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

export function PostIt({data, ...rest}: Props){
  return (
    <TouchableOpacity 
      style={[styles.container, {backgroundColor: data.color}]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.text}>{data.content}</Text>
    </TouchableOpacity>
  );
}