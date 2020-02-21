import { observable, action } from 'mobx';

export class TodoStore {
  @observable
  public todos: { id: string; text: string }[] = [];

  @action
  public addTodo = (text: string): void => {
    console.log(text);
    this.todos.push({
      id: '',
      text: text
    });
  };
}

export default new TodoStore();
