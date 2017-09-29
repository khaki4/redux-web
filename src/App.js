import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

// const actions = bindActionCreators({ updateCurrent }, store.dispatch);
// store의 state를 Component의 props에 매핑해줍니다.
const mapStateToProps = (state) => state

// 컴포넌트의 특정 함수형 props 를 실행 했을 때 개발자가 지정한 action을 dispatch 하도록 설정합니다
const mapDispatchToProps = (dispatch) => bindActionCreators({ updateCurrent }, dispatch)

// connect는 React Component 를 redux store에 연결 시켜줍니다.
const Connected = connect(mapStateToProps, mapDispatchToProps)(App)
export default Connected