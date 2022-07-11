import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes/Models";
import { PostIt } from '../../components/PostIt';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ButtonSettings } from '../../components/ButtonSettings';

export function Home(){
  const navigation = useNavigation<PropsStack>();

  function handleAddPostIt() {
    navigation.navigate('AddPostIt');
  }

  function handleAppSettings() {
    navigation.navigate('AppSettings');
  }

  return (
    <View style={styles.container}>
      <PostIt/>
      <PostIt/>
      <ButtonAdd
        onPress={handleAddPostIt}
      />
      <ButtonSettings
        onPress={handleAppSettings}
      />
    </View>
  );
}