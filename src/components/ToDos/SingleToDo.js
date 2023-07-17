import React from 'react'

export default function SingleToDos(props) {
  return (
    <tr>
        <td>{props.toDo.Name}</td>
        <td>{props.category.catName}</td>
    </tr>
  )
}
