import React from 'react';
import { useTimer, useStopWatch } from "../Hooks/useTimer";

export const TimerComponent = () => {
    const { time, startTimer, stopTimer, resetTimer } = useTimer(3600000); // 1 hour in milliseconds

    return (
        <div>
            <h2>Timer</h2>
            <h6 style={{ fontSize: '24px', color: 'blue' }}>{time}</h6>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export const StopWatchComponent = () => {
    const { time, startStopWatch, stopStopWatch, resetStopWatch } = useStopWatch();

    return (
        <div>
            <h2>Stopwatch</h2>
            <h6 style={{ fontSize: '24px', color: 'green' }}>{time}</h6>
            <button onClick={startStopWatch}>Start</button>
            <button onClick={stopStopWatch}>Stop</button>
            <button onClick={resetStopWatch}>Reset</button>
        </div>
    );
};

// Use TimerComponent and StopWatchComponent in your application
