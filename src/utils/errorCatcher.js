import errorStore from '../stores/errorStore';

export const errorCatcher3000 = (action) => {
  try {
    action();
  } catch (error) {
    errorStore.makeError(error + 'redacted error');
    errorStore.showError();
  }
};
