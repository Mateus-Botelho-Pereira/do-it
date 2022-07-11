import React, { useState, useCallback } from 'react';
import { styles } from './styles';
import { View, ScrollView, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { PropsStack } from "../../routes/Models";
import { PostIt } from '../../components/PostIt';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ButtonSettings } from '../../components/ButtonSettings';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Load } from "../../components/Load";
import { POST_IT_LIST } from '../../configs/database';
import { PostItProps } from '../../components/PostIt';

export function Home(){
  const navigation = useNavigation<PropsStack>();
  const [loading, setLoading] = useState(true);
  const [storagedList, setStoragedList] = useState<PostItProps[]>([]);

  function handleAddPostIt() {
    navigation.navigate('AddPostIt');
  }

  function handleEditPostIt(postItSelected: PostItProps) {
    navigation.navigate('EditPostIt');
  }

  function handleAppSettings() {
    navigation.navigate('AppSettings');
  }

  useFocusEffect(useCallback(() => {
    loadPostIts();
  },[]));

  async function loadPostIts() {
    const storage = await AsyncStorage.getItem(POST_IT_LIST);
    const postItArray: PostItProps[] = storage ? JSON.parse(storage) : [];

    console.log(storage)

    setStoragedList(postItArray);

    setLoading(false);
  }

  return (
    <View style={styles.container}>
      {
        loading ? 
        <Load />
        :
        <FlatList 
        data={storagedList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PostIt 
            data={item}
            onPress={() => handleEditPostIt(item)}
          />
        )}
        />
      }
      <ButtonAdd
        onPress={handleAddPostIt}
      />
      <ButtonSettings
        onPress={handleAppSettings}
      />
    </View>
  );
}