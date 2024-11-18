import { COLORS } from '../../../theme';

// cartItemStyles.ts
export const cartItemStyles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: `1px solid ${COLORS.border}`,
    borderRadius: '8px',
    padding: '8px 16px',
    marginBottom: '16px',
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  productName: {
    maxWidth: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginLeft: '16px',
    color: COLORS.darkText,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: COLORS.danger,
    color: 'white',
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
  controls: {
    padding: '4px 8px',
  },
};
