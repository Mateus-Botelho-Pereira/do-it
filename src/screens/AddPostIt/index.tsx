import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import { TextArea } from '../../components/TextArea';
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
  const [storagedList, setStoragedList] = useState([]);
  const [currentColor, setCurrentColor] = useState('');

  useEffect(() => {
    getData();
  },[]);

  async function getData() {
    const storage = await AsyncStorage.getItem(POST_IT_LIST);
    console.log(storage)

    if (storage && (JSON.parse(storage).length != 0)) {
      setStoragedList(JSON.parse(storage));
      setCurrentColor(JSON.parse(storage)[JSON.parse(storage).length - 1].color);
    } else {
      setStoragedList([]);
    }
  }

  async function handleSave() {
    let nextColor = '';

    if(currentColor === '#FBAD4B') {
      nextColor = '#EE68A3';
    } else if (currentColor === '#EE68A3') {
      nextColor = '#02ADE1';
    } else if (currentColor === '#02ADE1') {
      nextColor = '#E2E647';
    } else if (currentColor === '#E2E647') {
      nextColor = '#FFD81B';
    } else {
      nextColor = '#FBAD4B';
    }

    const newPostIT = {
      id: uuid.v4(),
      content: `${typedText}`,
      color: `${nextColor}`
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

  return (
    <View style={styles.container}>
      <TextArea
        multiline
        maxLength={100}
        numberOfLines={10}
        autoCorrect={false}
        onChangeText={setTypedText}
      />
      <ButtonSave 
        onPress={handleSave}
      />
      <ButtonDelete
        onPress={handleDelete}      
      />
    </View>
  );
}