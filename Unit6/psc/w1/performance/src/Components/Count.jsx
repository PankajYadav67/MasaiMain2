import React from "react";

const Count = ({ label, count, Increment, Decrement }) => {

    return (
        <div>
            {console.log(label, count)}
            <h3>{label}: {count}</h3>
            <div>
                <button onClick={Increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
            </div>

        </div>
    )
}

export default React.memo(Count);
// export default React.memo(Count);