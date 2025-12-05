export interface ServicePillar {
  id: number;
  title: string;
  icon: string;
  description: string;
  cta: string;
}

export interface KeyFigure {
  value: string;
  label: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}