import React from 'react'
import "../components/Card.css";



const Card = (props) => {
  return (
    <>
     <div className='card'>
        <img src={props.img} alt="" />
        <h1>💕My name is {props.name} and i am {props.age} years old.😊</h1>
        <button>Connect</button>
        </div> 
    </>
  )
}

export default Card
