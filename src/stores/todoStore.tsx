import { observable } from 'mobx';

export class TodoStore {
  @observable
  public todos: { id: string; text: string }[] = [];
}

export default new TodoStore();
