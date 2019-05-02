import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import TodoList from './components/TodoList';

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
          items: []
      }

      this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
      if(this._inputElement.value !== "") {
          var newItem = {
              text: this._inputElement.value,
              key: Date.now()
          };

          this.setState((prevState) => {
              return {
                  items: prevState.items.concat(newItem)
              };
          });

          this._inputElement.value = "";
      }

      console.log(this.state.items);

      e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <TodoList />
        </div>
      </div>
    );
  }
}
export default App;
