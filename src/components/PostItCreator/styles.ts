import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  postIt: {
    color: theme.baseColors.black,
    fontFamily: theme.fonts.medium500,
    fontSize: 18,
    lineHeight: 22,
    textAlignVertical: 'top',
    padding: 12,
    borderTopRightRadius: 16,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 24,
  },
  colorSelector: {
    padding: 12,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  colorButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderColor: 'black',
    borderWidth: 1,
    margin: 6,
  },
  color1: {
    backgroundColor: 'red',
  },

});