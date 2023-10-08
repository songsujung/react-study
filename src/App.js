import { useState, useEffect } from "react";

// Todo 만들기
// 갖고 있는 array를 직접적으로 수정하지 않으면서 한가지를 더 추가. toDos.push or toDos=""같이 State를 직접적으로 수정X, 수정하는 함수 생성
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // 여러 개의 toDo를 받을 수 있는 array 생성
  const onChange = (event) => setToDo(event.target.value); // toDo값을 수정하는 함수
  const onSubmit = (event) => {
    event.preventDefault();
    // toDo가 비어있다면 리턴
    if(toDo === "") {
      return;
    }
    // setTodos 안에 함수를 넣어서 array를 수정
    // 현재상태:currnentArray, []새로운 배열안에 toDo, ...currentArray 담음 (...을 쓰면 현재상태에 입력한toDo가 추가되는 배열 생성됨, ...을 안하면 배열안에 배열이 추가됨)
    setToDos(currentArray => [toDo, ...currentArray]);
    // setToDo 함수를 불러와서 input 비우기
    setToDo("");
  };
  console.log(toDos);
  return (
    // toDos.map함수 : array를 가져와서, 이 array의 item들을 변형해서 li가 되도록 만듦(입력하는 todo마다 li로 만들어 array를 생성)
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
