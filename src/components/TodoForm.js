import React from 'react'
import { connect } from 'react-redux';
import { updateCurrent } from '../reducers/todo';


const TodoForm = (props) => {
  const { currentTodo, updateCurrent } = props
  const hangleInputChange = (evt) => {
    const val = evt.target.value
    updateCurrent(val)
  }
  return (
    <form>
      <input
        type="text"
        onChange={hangleInputChange}
        value={currentTodo}
      />
    </form>
  )
}

export default connect(
  (state) => ({currentTodo: state.currentTodo}),
  {updateCurrent}
)(TodoForm)