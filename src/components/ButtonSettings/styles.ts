import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.baseColors.gray,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 28,
    right: 24,
    alignSelf: 'center'
  }
});