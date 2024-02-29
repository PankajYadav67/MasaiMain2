import { useState } from "react"

export const useCounter = (value = 0) => {
    const [count, setCount] = useState(value);

    const Increment = (IncVal = 1) => {
        setCount(count + IncVal);
    }
    const Decrement = (IncVal = 1) => {
        setCount(count - IncVal);
    }

    return { count, Increment, Decrement }
}