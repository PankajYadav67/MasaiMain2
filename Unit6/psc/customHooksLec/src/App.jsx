import { useEffect, useState } from 'react';
import './App.css';
import { StopWatch } from './Components/StopWatch';
import { StopWatch2 } from './Components/StopWatch2';
import { useApi } from './Hooks/useApi';
import axios from "axios";

export const getData = async () => {
  let r = await axios.get("http://localhost:8080/data");
  return r.data;
}

function App(getData) {

  const { loading, error, data } = useApi(getData);
  if (loading) return <div>Loading..</div>
  if (error) return <div>Error..</div>
  return (
    <>

      {data.map((row, index) => (
        <div key={index} >
          {row}
        </div>
      ))}
      {/* <StopWatch />
      <br />
      <StopWatch2 /> */}
    </>
  )
}

export default App
