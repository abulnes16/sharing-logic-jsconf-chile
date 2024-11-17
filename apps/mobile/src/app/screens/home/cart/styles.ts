import { Spacing } from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    paddingBottom: Spacing.xl,
  },
  list: {
    gap: Spacing.md,
    marginVertical: Spacing.lg,
  },
  totalContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  totalText: {
    fontWeight: 'bold',
  },
});
