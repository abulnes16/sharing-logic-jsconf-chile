export interface UILoadingState {
  isLoading: boolean;
  error?: UIError;
}

export interface UIError {
  title: string;
  message: string;
  code?: number;
}
