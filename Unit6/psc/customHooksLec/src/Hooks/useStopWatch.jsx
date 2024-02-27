import { useState, useRef, useEffect } from "react";
import { useCustomState } from "./useCustomState";

export const useStopWatch = () => {
    const timerId = useRef()
    const [time, setTime] = useCustomState(100);

    const start = () => {
        if (!timerId.current) {
            timerId.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }

    }
    const pause = () => {
        clearInterval(timerId.current);
        timerId.current = null;
    }
    const reset = () => {
        clearInterval(timerId.current);
        timerId.current = null;
        setTime(0);
    }
    useEffect(() => {
        clearInterval(timerId.current);
    }, [])

    return { time, start, pause, reset }
}