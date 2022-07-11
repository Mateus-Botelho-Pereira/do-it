import React from 'react';
import { styles } from './styles';
import { View, Text } from 'react-native';
import { PostIt } from '../../components/PostIt';
import { ButtonAdd } from '../../components/ButtonAdd';

export function Home(){
  return (
    <View style={styles.container}>
      <PostIt/>
      <PostIt/>
      <ButtonAdd/>
    </View>
  );
}