import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes/Models";
import { ButtonSave } from '../../components/ButtonSave';
import { ButtonDelete } from '../../components/ButtonDelete';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { POST_IT_LIST } from '../../configs/database';
import uuid from "react-native-uuid";

export function AddPostIt(){
  const navigation = useNavigation<PropsStack>();
  const [typedText, setTypedText] = useState('');
  const [currentColor, setCurrentColor] = useState('#FBAD4B');

  const [storagedList, setStoragedList] = useState([]);

  useEffect(() => {
    getData();
  },[]);

  async function getData() {
    const storage = await AsyncStorage.getItem(POST_IT_LIST);
    //console.log(storage)

    if (storage && (JSON.parse(storage).length != 0)) {
      setStoragedList(JSON.parse(storage));
    } else {
      setStoragedList([]);
    }
  }

  async function handleSave() {

    if(!typedText) {
      Alert.alert('Digite algo antes de salvar')
      return
    }

    const newPostIT = {
      id: uuid.v4(),
      content: `${typedText}`,
      color: `${currentColor}`
    };

    await AsyncStorage.setItem(
      POST_IT_LIST,
      JSON.stringify([...storagedList, newPostIT])
      //JSON.stringify([])
    );

    navigation.navigate('Home');
  }

  function handleDelete(){
    navigation.navigate('Home');  
  }

  function getColor(code: string) {
    setCurrentColor(code)
  }

  return (
    <View style={styles.container}>
        <TextInput
          style={[styles.postIt, {backgroundColor: currentColor}]}
          multiline
          maxLength={100}
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
    </View>
  );
}