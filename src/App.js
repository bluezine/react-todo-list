import React from 'react';
import TodoComponent from './todo/TodoComponent.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <TodoComponent />
      </div>
    );
  }
}

export default App;
