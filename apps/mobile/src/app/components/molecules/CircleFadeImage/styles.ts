import { BORDER_RADIUS, COLORS } from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = (width: number, height: number) =>
  StyleSheet.create({
    base: {
      borderRadius: BORDER_RADIUS.full,
      justifyContent: 'center',
      alignItems: 'center',
    },

    fadeContainer: {
      width: width * 1.85,
      height: height * 1.85,
      backgroundColor: `${COLORS.primary}3F`,
    },

    imageContainer: {
      backgroundColor: `${COLORS.primary}AF`,
      width: width * 1.3,
      height: width * 1.3,
    },

    image: {
      width,
      height,
    },
  });
