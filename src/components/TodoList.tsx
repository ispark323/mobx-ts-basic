import * as React from 'react';
import { observer } from 'mobx-react';

interface TodoListProps {
  todos: { id: string; text: string }[];
  // deleteTodo(id: string): void;
}

@observer
class TodoList extends React.Component<TodoListProps, {}> {
  render() {
    const list = this.props.todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ));
    return <div>{list}</div>;
  }
}

export default TodoList;
