import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// state를 변경할 때 모든 code들은 항상 다시 실행된다.
// component 내부의 몇몇 코드는 처음 딱 한 번만 실행되고 다시는 실행되지 않도록 하고 싶을 때에 useEffect를 활용(API를 호출할 때 등)
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  // useEffect function : 코드가 딱 한 번만 실행될 수 있도록 보호해줌
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
