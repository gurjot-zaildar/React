import React from 'react'

const card = (props) => {
  return (
    <div className='rounded-3xl ml-11 flex p-7 flex-col bg-center bg-cover ' style={{backgroundImage:`url(${props.image})`}}>
      <span className='bg-white rounded-full w-fit p-4 font-bold'>{props.srno}</span>
      <p className='text-white mt-50 w-50'>{props.p}</p>
      <button className='bg-blue-600 w-fit p-2 px-10 mt-10 rounded-4xl text-white font-bold'>Lets go</button>
    </div>
  )
}

export default card
