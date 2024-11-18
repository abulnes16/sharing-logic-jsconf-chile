import { COLORS, Spacing, BORDER_RADIUS, STROKE } from '../../../theme';

export const styles = {
  card: {
    padding: Spacing.xs,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: STROKE.border,
    borderColor: COLORS.border,
    borderStyle: 'solid',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: COLORS.border,
    },
  },

  headerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: Spacing.xs,
  },

  category: {
    textTransform: 'capitalize',
    color: COLORS.darkText,
    marginVertical: Spacing.xs,
  },

  titleContainer: {
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },

  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  goArrow: {
    backgroundColor: COLORS.secondary,
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
