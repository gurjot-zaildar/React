import React from 'react'
import Card from './components/Card'
import "./App.css"
const App = () => {
  return (
    <div className='app'>
      <Card name="gurjot" age={22} img={"https://images.unsplash.com/photo-1780726624500-8de106966b6f?q=80&w=429&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      <Card name="gurpreet" age={21}  img={"https://plus.unsplash.com/premium_photo-1780500270374-3949156d69ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
     
    </div>
  )
}

export default App
