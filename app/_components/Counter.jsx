"use client";

import { useState } from "react";

function Counter({ workes }) {
  const [count, setCount] = useState(0);

  console.log(workes);

  return (
    <div>
      <button
        className="text-xl bg-blue-600 text-white px-1"
        onClick={() => setCount((c) => c + 1)}
      >
        {count}
      </button>
    </div>
  );
}

export default Counter;
