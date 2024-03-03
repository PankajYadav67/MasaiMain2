import { useStopWatch } from "../Hooks/useStopWatch"


export const StopWatch2 = () => {
    const { time, start, reset } = useStopWatch();

    return (
        <div>
            <h1>StopWatch :{time}</h1>
            <br />
            <button onClick={start} >Start</button>
    
            <button onClick={reset} >Reset</button>
        </div>
    )
}