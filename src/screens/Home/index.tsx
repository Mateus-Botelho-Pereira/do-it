import React, { useState, useCallback } from 'react';
import { styles } from './styles';
import { View, Image, Text, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { PropsStack } from "../../routes/Models";
import { PostIt } from '../../components/PostIt';
import { ButtonAdd } from '../../components/ButtonAdd';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Load } from "../../components/Load";
import { POST_IT_LIST } from '../../configs/database';
import { PostItProps } from '../../components/PostIt';
import { Background } from '../../components/Background';
import postinho from "../../assets/postinho.png";

export function Home(){
  const navigation = useNavigation<PropsStack>();
  const [loading, setLoading] = useState(true);
  const [storagedList, setStoragedList] = useState<PostItProps[]>([]);

  function handleAddPostIt() {
    navigation.navigate('AddPostIt');
  }

  function handleEditPostIt(postItSelected: PostItProps) {
    navigation.navigate('EditPostIt', {postItSelected});
  }
  
  useFocusEffect(useCallback(() => {
    loadPostIts();
  },[]));

  async function loadPostIts() {
    const storage = await AsyncStorage.getItem(POST_IT_LIST);
    const postItArray: PostItProps[] = storage ? JSON.parse(storage) : [];

    setStoragedList(postItArray);

    setLoading(false);
  }

  return (
    <Background>
      <View style={styles.container}>
        {
            storagedList.length === 0 ?
            <View style={styles.newPostContainer}>
              <Image
                source={postinho}
                style={styles.newPostImage}
              />
              <Text  style={styles.newPostText}>
                ADICIONE UM NOVO POST IT
              </Text>
            </View>
            :
            <></>
        }
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
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
          />
        }
        <ButtonAdd
          onPress={handleAddPostIt}
        />
      </View>
    </Background>
  );
}