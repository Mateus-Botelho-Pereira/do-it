import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import { PostItCreator } from '../../components/PostItCreator';
import { useNavigation, useRoute } from "@react-navigation/native";
import { PropsStack } from "../../routes/Models";
import { ButtonSave } from '../../components/ButtonSave';
import { ButtonDelete } from '../../components/ButtonDelete';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { POST_IT_LIST } from '../../configs/database';
import { PostItProps } from '../../components/PostIt';

type Params = {
  postItSelected: PostItProps;
}

export function EditPostIt(){
  const navigation = useNavigation<PropsStack>();
  const route = useRoute();
  //const { postItSelected } = route.params as Params;
  
  const [typedText, setTypedText] = useState('');
  const [selectedColor, setSelectedColor] = useState([]);

  async function handleSave() {
    //navigation.navigate('Home');
    //console.log(String(postItSelected))
  }

  function handleDelete(){
    navigation.navigate('Home');  
  }

  return (
    <View style={styles.container}>
      <PostItCreator
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