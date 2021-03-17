import { showMessage } from 'react-native-flash-message';
import { colors } from '../colors';

export const showError = (message) => {
  showMessage({
    message,
    type: 'danger',
    backgroundColor: colors.red,
    color: colors.white,
  });
};

export const showSuccess = (message) => {
  showMessage({
    message,
    type: 'success',
    backgroundColor: colors.purple,
    color: colors.white,
  });
};
