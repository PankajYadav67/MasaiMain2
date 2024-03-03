import { useEffect, useState } from "react";


export const useCustomState = (initVal) => {
    const [val, setVal] = useState(initVal);
    useEffect(() => {
        console.log("New Value is", val);
    }, [val])
    return [val, setVal];
}