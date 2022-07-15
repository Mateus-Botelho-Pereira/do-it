
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { PropsStack } from "../../routes/Models";
import { ButtonSave } from '../../components/ButtonSave';
import { ButtonDelete } from '../../components/ButtonDelete';
import { ButtonBack } from '../../components/ButtonBack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { POST_IT_LIST } from '../../configs/database';
import { PostItProps } from '../../components/PostIt';
import { Background } from '../../components/Background';

type Params = {
  postItSelected: PostItProps;
}

export function EditPostIt(){
  const navigation = useNavigation<PropsStack>();
  const route = useRoute();
  const { postItSelected } = route.params as Params;
  
  const [typedText, setTypedText] = useState('');
  const [currentColor, setCurrentColor] = useState('#FBA519');

  useEffect(() => {
    getParams();
  },[]);

  function getParams() {
    setTypedText(postItSelected.content)
    setCurrentColor(postItSelected.color)
  }

  function getColor(code: string) {
    setCurrentColor(code)
  }

  async function handleSave() {
    
    if(!typedText) {
      Alert.alert('Digite algo antes de salvar')
      return
    }

    const storage: any = await AsyncStorage.getItem(POST_IT_LIST);
    const list = JSON.parse(storage);
    
    const indexOfObject = list.findIndex((object: { id: string; }) => {
      return object.id === String(postItSelected.id);
    });

    list[indexOfObject].content = typedText
    list[indexOfObject].color = currentColor

    await AsyncStorage.setItem(
      POST_IT_LIST,
      JSON.stringify(list)
    );

    navigation.navigate('Home');
  }

  async function handleDelete(){
    const storage: any = await AsyncStorage.getItem(POST_IT_LIST);
    const list = JSON.parse(storage);
    
    const indexOfObject = list.findIndex((object: { id: string; }) => {
      return object.id === String(postItSelected.id);
    });

    if (indexOfObject !== -1) {
      list.splice(indexOfObject, 1);
    }

    await AsyncStorage.setItem(
      POST_IT_LIST,
      JSON.stringify(list)
    );

    navigation.navigate('Home'); 
  }

  function handleBack() {
    navigation.navigate('Home');    
  }

  return (
    <Background>
      <View style={styles.container}>
          <TextInput
            style={[styles.postIt, {backgroundColor: currentColor}]}
            multiline
            numberOfLines={10}
            autoCorrect={false}
            onChangeText={setTypedText}
            value={typedText}
          />
          <View style={styles.colorSelector}>
            <View style={styles.colorRow}>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color1}]}
                activeOpacity={0.7}
                onPress={() => getColor('#FBA519')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color2}]}
                activeOpacity={0.7}
                onPress={() => getColor('#F3EB1F')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color3}]}
                activeOpacity={0.7}
                onPress={() => getColor('#9CCA3D')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color4}]}
                activeOpacity={0.7}
                onPress={() => getColor('#71C055')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color5}]}
                activeOpacity={0.7}
                onPress={() => getColor('#40B8EA')}
              />                              
            </View>

            <View style={styles.colorRow}>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color6}]}
                activeOpacity={0.7}
                onPress={() => getColor('#446FB7')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color7}]}
                activeOpacity={0.7}
                onPress={() => getColor('#5B53A3')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color8}]}
                activeOpacity={0.7}
                onPress={() => getColor('#87519E')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color9}]}
                activeOpacity={0.7}
                onPress={() => getColor('#EC1979')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color10}]}
                activeOpacity={0.7}
                onPress={() => getColor('#EE1E25')}
              />
            </View>
          </View>

        <ButtonSave 
          onPress={handleSave}
        />
        <ButtonDelete
          onPress={handleDelete}      
        />
        <ButtonBack
          onPress={handleBack}      
        />
      </View>
    </Background>
  );
}