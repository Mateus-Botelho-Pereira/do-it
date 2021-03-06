import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  AddPostIt: undefined;
  EditPostIt: { postItSelected: any };
};

export type PropsStack = NativeStackNavigationProp<RootStackParamList>;