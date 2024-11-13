import {
  BORDER_RADIUS,
  COLORS,
  Spacing,
  STROKE,
} from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  touchable: {
    minWidth: '80%',
  },

  base: {
    borderRadius: BORDER_RADIUS.medium,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: COLORS.white,
    fontWeight: 'bold',
  },

  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  outline: {
    borderColor: COLORS.primary,
    borderWidth: STROKE.border,
  },
});
