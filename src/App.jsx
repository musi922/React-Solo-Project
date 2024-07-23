import React, { useState } from 'react'
import './App.css'
import image1 from './assets/imag1.jpg'
import image2 from './assets/image2.jpg'


function App() {
//   // const [image, setImage] = useState("")
//   // const [toggle, setToggle] = useState(true)
//   // function handleClick() {
//   //   // Set the image depending on the value of toggle
//   //   if (toggle) {
//   //     setImage(image1)
//   //   } else {
//   //     setImage(image2)
//   //   }
    
//   //   // After each click, update the value of toggle
//   //   setToggle(!toggle)

//   }
      
       const [count,setCount] = useState(0)
       function handleAdd() {

        setCount(count + 1)
       }
       //i can use callback function here is same as the top one
       function handledecrease() {
        if (count >= 1) {
          setCount(count-1)
        }
       }
       function handleReset() {
        if (count>0) {
          setCount(0)
        }
        
       }

  return (
   <>
     <div className="container">
            {/* <img src={image}/> */}
            <h1>{count}</h1>
            <div className='flex gap-6'>
            <button onClick={handleAdd}>Increase me</button>
            <button onClick={handledecrease}>Decrease me</button>
            <button onClick={handleReset}>Reset me</button>

            </div>
        </div>
   </>
  )
}

export default App
