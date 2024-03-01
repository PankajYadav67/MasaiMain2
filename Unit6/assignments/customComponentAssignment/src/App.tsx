// import React from 'react';
import { useState } from 'react'
import './App.css'
import { PinInputComponents } from './Components/PinInput';


function App() {
  const [otp, setOtp] = useState<string>("");

  return (
    <div>
     
      <h3 style={{fontSize:"2rem"}}>OTP: {otp} </h3>
      <PinInputComponents length={4} setOtp={setOtp} limitPerBox={2} />
    </div>
  )
}

export default App
