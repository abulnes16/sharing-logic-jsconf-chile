import {
  BORDER_RADIUS,
  COLORS,
  Spacing,
  STROKE,
} from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    borderColor: COLORS.border,
    borderWidth: STROKE.border,
    borderRadius: BORDER_RADIUS.large,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    maxWidth: '20%',
    flexWrap: 'wrap',
  },

  deleteButton: {
    borderRadius: BORDER_RADIUS.full,
    width: 40,
    height: 40,
    backgroundColor: COLORS.danger,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
  },
});
