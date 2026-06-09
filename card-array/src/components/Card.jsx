import React from 'react'
import {Bookmark} from "lucide-react"
import "./Card.css"


const Card = (props) => {
  return (
    <div className='card'>
      <div className='top'>
        <img src={props.image} alt="" />
        <button>Save <Bookmark size={18}/></button>
      </div>
      <div className='middle'>
        <div className='cm'>
            <h2>{props.company}</h2>
            <span>{props.time}</span>
        </div>
        <h1>
            {props.role}
        </h1>
        <div className='bx'>
        <span className='ty'>{props.r1}</span>
        <span className='ty'>{props.r2}
        </span>
        </div>
      </div>
      <hr />
      <div className='bottom'>
        <div className='lbx'>
        <h1>{props.money}</h1>
        <h5>{props.location}</h5>
        </div>
        <div>
            <button>apply now</button>
        </div>
      </div>

    </div>
  )
}

export default Card


