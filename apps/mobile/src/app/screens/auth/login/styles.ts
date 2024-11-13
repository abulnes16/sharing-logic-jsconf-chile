import { BORDER_RADIUS } from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: BORDER_RADIUS.full,
  },
});
