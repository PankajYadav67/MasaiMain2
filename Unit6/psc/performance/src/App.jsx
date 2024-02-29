
import { useCallback } from 'react';
import './App.css'
import Count from './Components/Count'
import { useCounter } from './Hooks/useCounter'
import { Memo } from './Components/Memo';

function App() {
  // const { count: c1, Increment: i1, Decrement: d1 } = useCounter(10);
  // const { count: c2, Increment: i2, Decrement: d2 } = useCounter(0);

  return (
    <>
      {/* <Count label="counter1" count={c1} Increment={useCallback(() => i1(1), [c1])} Decrement={useCallback(() => d1(1), [c1])} />
      <Count label="counter2" count={c2} Increment={useCallback(() => i2(2), [c2])} Decrement={useCallback(() => d2(2), [c2])} /> */}
      <Memo/>
    </>
  )
}

export default App
