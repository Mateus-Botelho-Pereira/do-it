import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    backgroundColor: theme.postItColors.rioDeJaneiro.segundo,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center'
  }
});