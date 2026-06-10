import React from 'react'
import Nav from './nav/Nav'
import Left from "./left/Left"
import Right from './right/Right'

const Section1 = (props) => {
  return (
    <div className=''>
      <Nav/>
      <div className='flex p-8 h-160 '>
      <Left/> 
      <Right details={props.details}/>
      </div>
    </div>
  )
}

export default Section1
