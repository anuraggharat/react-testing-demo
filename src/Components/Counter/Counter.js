import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p data-testid="count">{count}</p>
      <button onClick={(count) => setCount(count + 1)}>Click</button>
    </div>
  );
}
