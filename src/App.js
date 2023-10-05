import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// cleanUp function : 컴포넌트가 사라진 후에 실행될 함수를 지정하는 것이며 반환되는 함수가 클린업함수이며, 메모리 누수 방지를 위해 사용(자주 사용하지 않는 방식)
// 버튼을 눌러서 함수가 실행되면서 버튼이 사라지면 'destroyed :('라는 메시지를 콘솔에 출력(리턴)
function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  // 이 코드보다 위의 방식으로 사용하는 것이 좋음
  // useEffect(function(){
  //   console.log("hi :)");
  //   return function() {
  //     console.log("bye :(");
  //   }
  // }, []);
  return <h1>Hello</h1>;
}
// function Hello() {
//   useEffect(() => {
//     console.log("created :)");
//     return () => console.log("destroyed :(") // 이 부분을 cleanUp함수라고 함
//   }, []);
//   return <h1>Hello</h1>;
// }

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
