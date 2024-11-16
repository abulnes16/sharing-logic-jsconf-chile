import { BORDER_RADIUS, Spacing } from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headingContainer: {
    width: '100%',
    paddingHorizontal: Spacing.md,
    marginVertical: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },

  smallLogo: {
    width: 30,
    height: 30,
    borderRadius: BORDER_RADIUS.full,
    marginRight: Spacing.md,
  },

  backArrow: {
    marginRight: Spacing.lg,
  },
});
