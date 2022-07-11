import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.postItColors.rioDeJaneiro.five,
    color: theme.baseColors.black,
    fontFamily: theme.fonts.medium500,
    fontSize: 18,
    lineHeight: 22,
    borderTopRightRadius: 16,
    borderColor: 'black',
    borderWidth: 2,
    padding: 12,
    textAlignVertical: 'top',
  },
});