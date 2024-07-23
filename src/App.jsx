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
      
       const [increase,setIncrease] = useState(0)
       function handleAdd() {
        setIncrease(increase + 1)
       }
       function handledecrease() {
        setIncrease(increase - 1)
       }

  return (
   <>
     <div className="container">
            {/* <img src={image}/> */}
            <h1>{increase}</h1>
            <div className='flex gap-6'>
            <button onClick={handleAdd}>Increase me</button>
            <button onClick={handledecrease}>Decrease me</button>

            </div>
        </div>
   </>
  )
}

export default App
