export const AlertConstants = {
  SUCCESS : 'ALERT_SUCCESS',
  ERROR : 'ALERT_ERROR',
  CLEAR : 'ALERT_CLEAR'
};

export interface AlertMessage {
  message: string;
}
export interface AlertState {
  messages: AlertMessage[];
}

interface SuccessAlertAction {
  type: typeof AlertConstants.SUCCESS;
  message: AlertMessage;
}

interface ErrorAlertAction {
  type: typeof AlertConstants.ERROR;
  message: AlertMessage;
}

interface ClearAlertAction {
  type: typeof AlertConstants.CLEAR;
}

export type AlertActionTypes =
  SuccessAlertAction &
  ErrorAlertAction &
  ClearAlertAction;