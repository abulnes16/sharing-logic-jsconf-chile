import { BORDER_RADIUS, COLORS } from '../../../theme';

export const styles = (width: number, height: number) => ({
  base: {
    borderRadius: BORDER_RADIUS.full,
    display: 'flex',
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
    height: height * 1.3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },

  image: {
    width,
    height,
    borderRadius: '50%',
  },
});
