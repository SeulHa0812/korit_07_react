type HelloProps = {
  name: string; // 얘네는 Java에서의 field처럼 느껴짐
  age?: number;
  fn?: () => void; // 얘는 그러면 Java 에서의 method처럼 보이면 좋겠음
  fn2?: (msg: string) => void; // 얘는 매개변수로 string data를 받고 return 타입이 없음
}

export default HelloProps;

// 여기 내에 모든 type들을 다 모아두는 편.

