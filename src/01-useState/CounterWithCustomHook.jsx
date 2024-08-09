import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {
    const { counter,addCounter,resetCounter,substractCounter } = useCounter(10,0,11);



  return (
    <>
        <h1>Counter with Hook: {counter} </h1>
        <hr />

        <button className="btn btn-secondary" onClick={() => addCounter(10)}>+1</button>
        <button className="btn btn-secondary" onClick={resetCounter}>Reset</button>
        <button className="btn btn-secondary" onClick={() => substractCounter(1)}>-1</button>


    </>
  )
}
