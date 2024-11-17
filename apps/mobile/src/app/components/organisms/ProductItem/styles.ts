import {
  BORDER_RADIUS,
  COLORS,
  Spacing,
  STROKE,
} from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '45%',
    padding: Spacing.lg,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: STROKE.border,
    borderColor: COLORS.border,
  },

  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },

  category: {
    textTransform: 'capitalize',
    color: COLORS.darkText,
    marginVertical: Spacing.xs,
  },

  titleContainer: {
    maxWidth: '80%',
    flexWrap: 'wrap',
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  goArrow: {
    backgroundColor: COLORS.secondary,
    borderRadius: BORDER_RADIUS.full,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
