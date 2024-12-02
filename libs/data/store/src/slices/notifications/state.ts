import { NotificationType } from '@e-commerce-sharling-logic/models';

export interface NotificationState {
  showNotification: boolean;
  title: string;
  subtitle?: string;
  type: NotificationType;
}
