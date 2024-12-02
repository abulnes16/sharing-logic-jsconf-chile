import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationState } from './state';
import { RootState } from '../../store';
import { NotificationType } from '@e-commerce-sharling-logic/models';

const initialState: NotificationState = {
  showNotification: false,
  title: '',
  subtitle: undefined,
  type: 'warning',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<{
        title: string;
        subtitle?: string;
        type: NotificationType;
      }>
    ) => {
      state.showNotification = true;
      state.title = action.payload.title;
      state.subtitle = action.payload.subtitle;
      state.type = action.payload.type;
    },
    hideNotification: (state) => {
      state.showNotification = false;
      state.title = '';
      state.subtitle = undefined;
    },
  },
});

export const NotificationActions = notificationSlice.actions;

export const NotificationSelectors = {
  getNotification: (state: RootState) => state.notifications,
};

export default notificationSlice.reducer;
