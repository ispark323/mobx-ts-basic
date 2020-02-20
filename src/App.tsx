import React from 'react';
import { observer, inject } from 'mobx-react';
import { TodoStore } from './stores/todoStore';

interface AppProps {
  todoStore?: TodoStore;
}

@inject('todoStore')
@observer
class App extends React.Component<AppProps, {}> {
  render() {
    const store = this.props.todoStore as TodoStore;
    return <div>{store.todos}</div>;
  }
}

export default App;
