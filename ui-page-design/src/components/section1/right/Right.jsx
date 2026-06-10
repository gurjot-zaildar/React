import React from 'react'
import Card from "./card/card"
const Right = (props) => {
  const details = props.details
  return (
    <div className='w-[300%] overflow-auto  gap-3 p-3  flex'>
      {details.map(function(elm,idx){
        return <Card key={idx} srno={elm.srno} image={elm.image} p={elm.p}/>
      })}
    </div>
  )
}

export default Right
