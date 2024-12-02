import { NotificationType } from '@e-commerce-sharling-logic/models';
import {
  NotificationActions,
  NotificationSelectors,
  useAppDispatch,
  useAppSelector,
} from '@e-commerce-sharling-logic/store';

const useNotification = () => {
  const { showNotification, hideNotification } = NotificationActions;
  const notification = useAppSelector(NotificationSelectors.getNotification);
  const dispatch = useAppDispatch();

  const displayNotification = (
    title: string,
    type: NotificationType,
    subtitle?: string
  ) => dispatch(showNotification({ title, type, subtitle }));

  const dismiss = () => dispatch(hideNotification());

  return {
    notification,
    displayNotification,
    dismiss,
  };
};

export default useNotification;
