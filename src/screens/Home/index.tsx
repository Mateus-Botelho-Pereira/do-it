import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes/Models";
import { PostIt } from '../../components/PostIt';
import { ButtonAdd } from '../../components/ButtonAdd';

export function Home(){
  const navigation = useNavigation<PropsStack>();

  function handleAddPostIt() {
    navigation.navigate('AddPostIt');
  }

  return (
    <View style={styles.container}>
      <PostIt/>
      <PostIt/>
      <ButtonAdd
        onPress={handleAddPostIt}
      />
    </View>
  );
}