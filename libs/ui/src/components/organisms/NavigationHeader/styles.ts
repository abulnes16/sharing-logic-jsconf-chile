import { COLORS, Spacing } from '../../../theme';

export const container = {
  display: 'flex',
  gap: 2,
};

export const appBarStyles = {
  backgroundColor: COLORS.primary,
};

export const toolbarStyles = {
  flexGrow: 1,
};

export const buttonStyles = {
  color: COLORS.white,
};

export const activeLinkStyles = {
  color: COLORS.white,
  '&.active': {
    fontWeight: 'bold',
    backgroundColor: COLORS.secondary,
  },
};

export const logo = {
  borderRadius: '50%',
  maxWidth: '40px',
  height: '40px',
  objectFit: 'cover', // Ensures the image maintains its aspect ratio
  marginRight: Spacing.md,
};
