import {
  BORDER_RADIUS,
  COLORS,
  Spacing,
  STROKE,
} from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: STROKE.border,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.large,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
});
