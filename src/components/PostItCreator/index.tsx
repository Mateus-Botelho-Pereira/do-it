import React, { useState } from "react";
import { View, TextInput, TextInputProps, TouchableOpacity, ScrollView } from "react-native";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = TextInputProps & {
  previousText?: String;
  previousColor?: String;
}

export function PostItCreator({...rest}: Props) {
  const [currentColor, setCurrentColor] = useState('#FBAD4B');

  function getColor(code: string) {
    setCurrentColor(code)
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <TextInput
          style={[styles.postIt, {backgroundColor: currentColor}]}
          multiline
          maxLength={100}
          numberOfLines={10}
          autoCorrect={false}
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
      </ScrollView>
    </View>
  );
}