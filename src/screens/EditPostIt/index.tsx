
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
import uuid from "react-native-uuid";
import { PostItProps } from '../../components/PostIt';


type Params = {
  postItSelected: PostItProps;
}

export function EditPostIt(){
  const navigation = useNavigation<PropsStack>();
  const route = useRoute();
  const { postItSelected } = route.params as Params;
  
  const [typedText, setTypedText] = useState('');
  const [currentColor, setCurrentColor] = useState('#FBAD4B');

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
              onPress={() => getColor('#FBAD4B')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color2}]}
              onPress={() => getColor('#EE68A3')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color3}]}
              onPress={() => getColor('#02ADE1')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color4}]}
              onPress={() => getColor('#E2E647')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color5}]}
              onPress={() => getColor('#FFD81B')}
            />                              
          </View>

          <View style={styles.colorRow}>
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color6}]}
              onPress={() => getColor('#70CBC2')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color7}]}
              onPress={() => getColor('#C4E069')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color8}]}
              onPress={() => getColor('#F3778F')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color9}]}
              onPress={() => getColor('#F49EBB')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color10}]}
              onPress={() => getColor('#E75337')}
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
        onPress={handleDelete}      
      />
    </View>
  );
}