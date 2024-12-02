export interface UILoadingState {
  isLoading: boolean;
  error?: UIError;
}

export interface UIError {
  title: string;
  message: string;
  code?: number;
}

export type TextType = 's1' | 's2' | 's3' | 's4' | 's5' | 's6';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type ButtonType = 'primary' | 'secondary' | 'outline';

export type NotificationType = 'warning' | 'success' | 'error';
