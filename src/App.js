import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// state를 변경할 때 모든 code들은 항상 다시 실행된다.
// component 내부의 몇몇 코드는 처음 딱 한 번만 실행되고 다시는 실행되지 않도록 하고 싶을 때에 useEffect를 활용(API를 호출할 때 등)

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // useEffect function : 코드가 딱 한 번만 실행될 수 있도록 보호해줌
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  // keyword가 변화할 때만 코드가 실행되게 해보자. (버튼 누를 때에 검색input이 실행되는 것을 방지)
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  // counter가 변화할 때만 코드가 실행되게 해보자.
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
