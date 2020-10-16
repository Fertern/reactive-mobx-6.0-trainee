import { makeAutoObservable } from 'mobx';

const errorStore = () => ({
  errors: [],
  makeError(error) {
    this.errors.push(error);
  },
  showError() {
    console.error(this.errors);
  },
});

export default makeAutoObservable(errorStore());
