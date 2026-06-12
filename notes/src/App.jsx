import { useState } from 'react'
import Card from './components/card'

const App = () => {
  
  const [title, settitle] = useState('')
   const [desc, setdesc] = useState('')
   const [task, settask] = useState([])

   function inputHandler(e){
    settitle(e.target.value)
   }
   function desHandler(e){
    setdesc(e.target.value)
   }
   function submitHandler(e){
    e.preventDefault()

    const copytask = [...task]

    copytask.push({title,desc})

    settask(copytask)

    settitle('')
    setdesc('')

   }

  return (
    <>
    <div>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>

       <input 
       type="text"
       placeholder='title'
       value={title}
       onChange={inputHandler}
      
      
       />

      <textarea 
      placeholder='description' 
      value={desc}
      onChange={desHandler}
      />

    <button>ADD NOTE</button>

    </form>
      </div>

      <div>
        {task.map(function(elm,idx){
          return <Card key={idx} title={elm.title} desc={elm.desc} 
          onDelete={() => {
              const copy = [...task]
              copy.splice(idx, 1)
              settask(copy)
            }}/>
        })}
       
      </div>
    </>
  )
}

export default App
