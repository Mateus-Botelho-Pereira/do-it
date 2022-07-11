import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  AppSettings: undefined;
  AddPostIt: undefined;
  EditPostIt: undefined;
};

export type PropsStack = NativeStackNavigationProp<RootStackParamList>;