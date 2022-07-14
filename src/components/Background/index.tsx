import React from "react";
import { styles } from "./styles";
import { View } from 'react-native';

type Props = {
  children: any;
}

export function Background({children} : Props) {
  return(
    <View style={styles.container}>
      {children}
    </View>
  );
}