import { useState } from "react"


type TodoProps = {
    handleAdd: Function;
}
export const TodosInput = ({ handleAdd }: TodoProps) => {
    const [value, setValue] = useState("");
    const click = () => {
        handleAdd(value);
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <input type="text" placeholder="type here.." value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={click}>ADD</button>
        </div>
    )
}