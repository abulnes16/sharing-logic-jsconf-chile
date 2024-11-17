import { COLORS, Spacing } from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    paddingBottom: Spacing.lg,
  },
  image: {
    alignSelf: 'center',
    marginBottom: Spacing.lg,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    maxWidth: '90%',
  },

  category: {
    textTransform: 'capitalize',
    color: COLORS.darkText,
  },

  price: {
    fontWeight: 'bold',
  },
});
