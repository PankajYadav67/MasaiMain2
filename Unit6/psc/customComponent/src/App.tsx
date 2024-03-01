// import React from 'react';
import { useState } from 'react'
import './App.css'

import { PinInputComponents, } from './Components/PinInputComponents'

function App() {
  const [otp, setOtp] = useState<string>("");
  // const inputRef = React.useRef<HTMLInputElement>(null);

  // const handleClick = () => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //     inputRef.current.value = "111";
  //     // inputRef.current.select();
  //     inputRef.current.scrollIntoView();
  //   }
  // }


  return (
    <div>
      {/* <button onClick={handleClick}>Hello</button>
      <br />
      <h1>Text 1</h1>
      <h1>Text 2</h1>
      <h1>Text 3</h1>
      <h1>Text 4</h1>


      <input type="text" ref={inputRef} />
      <input type="text" /> */}
      <h3>OTP: {otp} </h3>
      <PinInputComponents length={4} setOtp={setOtp} limitPerBox={2}/>
    </div>
  )
}

export default App
