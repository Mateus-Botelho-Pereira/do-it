import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes/Models";
import { ButtonSave } from '../../components/ButtonSave';
import { ButtonBack } from '../../components/ButtonBack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { POST_IT_LIST } from '../../configs/database';
import uuid from "react-native-uuid";
import { Background } from '../../components/Background';

export function AddPostIt(){
  const navigation = useNavigation<PropsStack>();
  const [typedText, setTypedText] = useState('');
  const [currentColor, setCurrentColor] = useState('#FBA519');

  const [storagedList, setStoragedList] = useState([]);

  useEffect(() => {
    getData();
  },[]);

  async function getData() {
    const storage = await AsyncStorage.getItem(POST_IT_LIST);

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

  function handleBack() {
    navigation.navigate('Home');    
  }

  function getColor(code: string) {
    setCurrentColor(code)
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
                onPress={() => getColor('#FBA519')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color2}]}
                onPress={() => getColor('#F3EB1F')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color3}]}
                onPress={() => getColor('#9CCA3D')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color4}]}
                onPress={() => getColor('#71C055')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color5}]}
                onPress={() => getColor('#40B8EA')}
              />                              
            </View>

            <View style={styles.colorRow}>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color6}]}
                onPress={() => getColor('#446FB7')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color7}]}
                onPress={() => getColor('#5B53A3')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color8}]}
                onPress={() => getColor('#87519E')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color9}]}
                onPress={() => getColor('#EC1979')}
              />
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color10}]}
                onPress={() => getColor('#EE1E25')}
              />
            </View>
          </View>

        <ButtonSave 
          onPress={handleSave}
        />
        <ButtonBack
          onPress={handleBack}      
        />
      </View>
    </Background>
  );
}