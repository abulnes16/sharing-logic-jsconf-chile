import { HeadingTextSize } from '@e-commerce-sharling-logic/ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  h1: {
    fontSize: HeadingTextSize.xl,
  },
  h2: {
    fontSize: HeadingTextSize.lg,
  },
  h3: {
    fontSize: HeadingTextSize.mdLg,
  },
  h4: {
    fontSize: HeadingTextSize.md,
  },
  h5: {
    fontSize: HeadingTextSize.smMd,
  },
  h6: {
    fontSize: HeadingTextSize.sm,
  },
});
