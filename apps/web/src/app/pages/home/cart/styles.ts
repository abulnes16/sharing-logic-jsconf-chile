// styles.ts
import { COLORS, Spacing } from '@e-commerce-sharling-logic/ui';

export const styles = {
  container: {
    padding: 2,
  },
  emptyCartText: {
    textAlign: 'center',
    color: COLORS.darkText,
  },
  cartItemsPlaceholder: {
    textAlign: 'center',
    color: COLORS.darkText,
  },

  cartTotalBox: {
    padding: '16px',
    border: `1px solid ${COLORS.white}`,
    borderRadius: '8px',
    textAlign: 'center',
  },
  totalText: {
    marginBottom: Spacing.xsSm,
    fontWeight: 'bold',
    color: COLORS.darkText,
  },
};
