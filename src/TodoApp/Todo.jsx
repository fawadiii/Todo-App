import React, { useState } from 'react'

const Todo = () => {

  const [inputField, setinputField] = useState("");
  const [listItems, setlistItems] = useState([]);

  const itemEvent = (e) => {
    setinputField(e.target.value)
  }
  const addItem = () => {
    if (inputField !== "") {
      setlistItems((listItems) => {
        const updatedList = [...listItems, inputField]
        // console.log(updatedList)
        return updatedList
      })
    }
    setinputField("")
  }
  const removeItem = (i) => {
    const updatedlistData = listItems.filter((elem, id) => {
      return i !== id
    })
    setlistItems(updatedlistData)
  }
  const removeAll = () => {
    setlistItems([])
  }

  return (
    <>
      <div className='container'>
        <div className='header'>TODO APP</div>
        <input className='inputfield'
          type='text'
          placeholder='Add Item'
          value={inputField}
          onChange={itemEvent} />
        <button onClick={addItem}>Add</button>
        {/* <p className='list_heading'>Here is your list</p> */}

        {listItems !== [] && listItems.map((items, i) => {
          return (
            <>
              <div key={i}>
                <div className='listData' >{items}</div>
                <div><button className='btn_remove' onClick={() => removeItem(i)}>Remove</button></div>
              </div>
            </>
          )
        })}
        {listItems.length >= 1 && <button className='btnremoveall' onClick={removeAll}>Remove All</button>}

      </div>
    </>
  )
}

export default Todo