import React from 'react'
import Section1 from './components/section1/Section1.jsx'

let details = [
  {
    image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    srno: "1",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est, ratione deleniti libero veritatis deserunt quam accusantium minima necessitatibus sint?"
  },
  {
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500&auto=format&fit=crop",
    srno: "2",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum. Aspernatur beatae molestias eligendi neque laboriosam ratione."
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
    srno: "3",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cumque. Adipisci laborum vitae deleniti consectetur."
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop",
    srno: "4",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officiis doloremque, rerum dignissimos recusandae voluptatum."
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop",
    srno: "5",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo. Accusantium quaerat numquam consequatur cupiditate."
  }
];


const App = () => {
  return (
    <>
      <Section1 details={details}/>
    </>
  )
}

export default App
