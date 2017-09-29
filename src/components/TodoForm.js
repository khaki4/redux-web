import React from 'react'

export default (props) => {
  const { currentTodo, changeCurrent } = props
  const hangleInputChange = (evt) => {
    const val = evt.target.value
    changeCurrent(val)
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
