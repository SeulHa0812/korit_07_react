import { useState } from "react";

function Counter() {
  // 초기값이 0인 상태를 선언.
  const [count, setCount] = useState(0); //1. 최상위에서 호출

  const increment = () => {
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
  }

  return (
    <div>
      <p>버튼 클릭 횟수 = {count}</p>
      <button onClick={increment}>
        증가 {count}
      </button>
    </div>
  );
}

export default Counter;