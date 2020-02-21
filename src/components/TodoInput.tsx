import * as React from 'react';
import { observer } from 'mobx-react';

interface TodoInputProps {
  addTodo(text: string): void;
}

@observer
class TodoInput extends React.Component<TodoInputProps, {}> {
  private _input: HTMLInputElement;
  render() {
    return (
      <div>
        <input
          type="text"
          ref={ref => {
            this._input = ref as HTMLInputElement;
          }}
        />
        <button onClick={() => this._addTodo()}>Add </button>
      </div>
    );
  }
  private _addTodo = () => {
    const text = this._input.value;
    if (text !== '') {
      this.props.addTodo(text);
      this._input.value = '';
    }
  };
}

export default TodoInput;
