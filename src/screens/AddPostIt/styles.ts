import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: getStatusBarHeight() + 10,
  },
  postIt: {
    height: 250,
    color: theme.baseColors.black,
    fontFamily: theme.fonts.medium500,
    fontSize: 18,
    lineHeight: 22,
    textAlignVertical: 'top',
    padding: 12,
    borderTopRightRadius: 16,
    borderColor: 'black',
    borderWidth: 1,
  },
  colorSelector: {
    padding: 10,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  colorButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderColor: 'black',
    borderWidth: 1,
    margin: 6,
  }
});