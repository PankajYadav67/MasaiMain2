import { useEffect, useState } from 'react';
import './App.css';
import { StopWatch } from './Components/StopWatch';
import { StopWatch2 } from './Components/StopWatch2';
import { useApi } from './Hooks/useApi';
import axios from "axios";
import { useDelayedApi } from './Hooks/useDelayedApi';

export const getData = async () => {
  let r = await axios.get("http://localhost:8080/data");
  return r.data;
}
export const getTodos = async () => {
  let r = await axios.get("http://localhost:8080/todos");
  return r.data;
}
export const postTodos = async (params) => {
  let r = await axios.post("http://localhost:8080/todos", params);
  return r.data;
}

function App() {

  const { loading, data, error, Refresh } = useDelayedApi(getData);
  const { data: todosData } = useApi(getTodos);
  const { mutate } = useDelayedApi(postTodos);


  return (
    <>
      <div>
        <h2 style={{ gap: "10px" }}>Data
          <button onClick={Refresh}>Refresh</button>
        </h2>
        <div>
          {loading && <div>Loading..</div>}
          {error && <div>Error..</div>}
          {!loading && !error && data.map((row, index) => (
            <div key={index} >
              {row}

            </div>
          ))}
        </div>
        <h2>Todos <button>Add new post</button></h2>
        {todosData.map((row, index) => (
          <div key={index} >
            {row.value}
          </div>
        ))}
        {/* <StopWatch />
      <br />
      <StopWatch2 /> */}
      </div>
    </>
  )
}

export default App
