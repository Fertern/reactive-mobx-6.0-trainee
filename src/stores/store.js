import { makeAutoObservable } from 'mobx';
import { errorCatcher3000 } from '../utils/errorCatcher';
import errorStore from './errorStore';

const createStore = () => ({
  name: 'Default',
  surname: 'Davis',

  setName(name) {
    this.name = name;
  },

  badRequest() {
    errorCatcher3000(() => {
      throw new Error('bad error - ');
    });
  },

  async setSurName(name) {
    this.setName(
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(name + 'REDACTED!');
          errorStore.makeError('DOGE ERROR');
          errorStore.showError();
        }, 1000)
      )
    );
    this.surname = await new Promise((resolve) =>
      setTimeout(() => {
        resolve(name);
      }, 5000)
    );
  },
});

export default makeAutoObservable(createStore());
