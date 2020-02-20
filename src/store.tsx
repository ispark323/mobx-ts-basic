import { observable } from 'mobx';

class Store {
  @observable
  likes: number = 7;

  addLike = () => {
    this.likes++;
  };
}

export default new Store();
