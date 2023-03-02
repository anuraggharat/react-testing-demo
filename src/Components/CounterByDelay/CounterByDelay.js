import React,{useState} from "react";

const CounterByDelay = () => {
  const [count, setCount] = useState(0);

  const delayCount = () =>
    setTimeout(() => {
      setCount(count + 1);
    }, 500);

  return (
    <>
      <h1 data-testid="count">{count}</h1>
      <button data-testid="count-button" onClick={delayCount}>
        Count by delay
      </button>
    </>
  );
};

export default CounterByDelay;
