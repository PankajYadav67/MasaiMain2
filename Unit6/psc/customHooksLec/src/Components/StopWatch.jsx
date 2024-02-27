import { useStopWatch } from "../Hooks/useStopWatch"


export const StopWatch = () => {
  const {time ,start,pause,reset} =useStopWatch();

    return (
        <div>
            <h1>StopWatch :{time}</h1>
            <br />
            <button onClick={start} >Start</button>
            <button onClick={pause} >Pause</button>
            <button onClick={reset} >Reset</button>
        </div>
    )
}