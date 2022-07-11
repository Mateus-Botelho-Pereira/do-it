import React from 'react';
import { styles } from './styles';
import { View, Text } from 'react-native';
import { PostItProps } from '../../components/PostIt';
import { useRoute } from "@react-navigation/native";

type Params = {
  postItSelected: PostItProps;
}

export function EditPostIt(){
  const route = useRoute();
  const { postItSelected } = route.params as Params;

  return (
    <View>
      <Text>EditPostIt EditPostIt EditPostIt</Text>
    </View>
  );
}