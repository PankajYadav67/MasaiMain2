import { useMemo, useState } from "react"



export const Memo = () => {
    const [ans, setAns] = useState();
    const [value, setValue] = useState(0);

    const fibo = (n) => {
        if (n <= 1) return n;
        return fibo(n - 1) + fibo(n - 2);
    }
    const memorizedFib = useMemo(() => fibo(value),[value])
    
    const calc = () => {
        console.time();
        // let a = fibo(value);
        let a = memorizedFib;
        console.timeEnd();
        setAns(a);
    }

    return (

        <div>
            <h3>{ans}</h3>
            <div>
                <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={calc}>Calc</button>
            </div>
        </div>
    )
}