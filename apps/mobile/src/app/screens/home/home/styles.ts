import { Spacing } from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: {
    width: '100%',
    gap: Spacing.sm,
    marginVertical: Spacing.md,
    paddingBottom: Spacing.xl,
  },

  columnWrapper: {
    gap: Spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
