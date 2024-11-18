// styles.ts
import { SxProps, Theme } from '@mui/material';
import { BORDER_RADIUS, COLORS, Spacing, STROKE } from '../../../theme';

export const containerStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  border: `${STROKE.border}px solid`,
  borderColor: COLORS.border,
  borderRadius: BORDER_RADIUS.small,
  padding: `${Spacing.xsSm}px ${Spacing.mdLg}px`,
};

export const quantityTextStyle: SxProps<Theme> = {
  mx: 2,
};
