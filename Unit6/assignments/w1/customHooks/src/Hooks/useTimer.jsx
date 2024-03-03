import { useState, useEffect, useRef } from 'react';

// Helper function to format time in hours, minutes, and seconds
const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    const formatNumber = (num) => (num < 10 ? `0${num}` : `${num}`);
    return `${formatNumber(hours)} hours ${formatNumber(minutes)} minutes ${formatNumber(seconds)} seconds`;
};

// useTimer hook
const useTimer = (initTime) => {
    const [time, setTime] = useState(initTime);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime - 1000);
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(initTime);
    };

    useEffect(() => {
        return () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
        };
    }, []);

    return { time: formatTime(time), startTimer, stopTimer, resetTimer };
};

// useStopWatch hook
const useStopWatch = () => {
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    const startStopWatch = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
        }
    };

    const stopStopWatch = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const resetStopWatch = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(0);
    };

    useEffect(() => {
        return () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
        };
    }, []);

    return { time: formatTime(time), startStopWatch, stopStopWatch, resetStopWatch };
};

export { useTimer, useStopWatch };
