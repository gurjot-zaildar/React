import React from 'react'

const Card = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <button onClick={props.onDelete}>DELETE</button>
    </div>
  )
}

export default Card
