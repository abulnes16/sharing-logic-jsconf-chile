import { COLORS, Spacing } from '@e-commerce-sharling-logic/ui';

export const productDetailStyles = {
  container: {
    padding: Spacing.md,
    maxWidth: '1200px',
    margin: '0 auto',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  brandCategory: {
    fontStyle: 'italic',
    marginBottom: `${Spacing.lg}px`,
    textTransform: 'capitalize',
  },
  description: {
    marginBottom: `${Spacing.lg}px`,
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    marginBottom: '24px',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: COLORS.darkText,
  },
  quantifier: {
    maxWidth: '80px',
  },
  addToCartButton: {
    marginTop: '16px',
    padding: '10px 20px',
  },
};
