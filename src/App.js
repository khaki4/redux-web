import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrent } from './reducers/todo';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
            currentTodo={this.props.currentTodo}
            changeCurrent={this.props.updateCurrent}
          />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state
// const mapDispatchToProps = {updateCurrent}

// connect는 React Component 를 redux store에 연결 시켜줍니다.

//==================================================================
// const Connected = connect((state) => state, {updateCurrent})(App)

//==================================================================
export default connect(
  (state) => state,
  {updateCurrent}
)(App)
