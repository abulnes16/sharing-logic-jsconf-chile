import { IMAGES, Spacing } from '@e-commerce-sharling-logic/ui';

export const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  imageSection: {
    flex: 1,
    backgroundImage: `url(${IMAGES.LOGO})`,
    backgroundSize: 'contain', // Adjusts to maintain aspect ratio
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'black',
  },
  contentSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.sm,
  },
  header: {
    textAlign: 'center',
  },
  button: {
    marginTop: Spacing.md,
    width: '80%',
    py: 2,
  },

  loader: {
    marginTop: Spacing.md,
  },
};
