import React from 'react';
import { styles } from './styles';
import { View, Text } from 'react-native';
import { TextArea } from '../../components/TextArea';
import { ButtonSave } from '../../components/ButtonSave';
import { ButtonDelete } from '../../components/ButtonDelete';

export function AddPostIt(){
  return (
    <View style={styles.container}>
      <TextArea
        multiline
        maxLength={100}
        numberOfLines={10}
        autoCorrect={false}
        //onChangeText={}
      />
      <ButtonSave />
      <ButtonDelete/>
    </View>
  );
}