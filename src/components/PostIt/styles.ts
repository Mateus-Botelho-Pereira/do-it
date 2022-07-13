import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 24,
    padding: 12,
    borderColor: 'black',
    borderWidth: 2,
    borderTopRightRadius: 16,
  },
  text: {
    fontFamily: theme.fonts.medium500,
    fontSize: 18,
    lineHeight: 22,
  }
});