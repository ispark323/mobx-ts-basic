import React from 'react';
import { observer } from 'mobx-react';
import store from './store';
import './App.css';

@observer
// function App() {
class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{store.likes}</p>
          <button onClick={() => store.addLike()}>Add like</button>
        </header>
      </div>
    );
  }
}

export default App;
