import React, {useState} from "react"; //react는 라이브러리이므로 컴포넌트를 가져와서 
import "./App.css"
import List from "../../new-react-project/src/components/List";
import Form from "../../new-react-project/src/components/Form";

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault(); //페이지가 리로드 되는 것을 막아줌.

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    //원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData(prev => [...prev, newTodo]);
    setValue("");

  }

    return(
      <div className="flex items-center justify-center first-letter:w-screen h-screen bg-blue-100" >
        <div className = "w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 md:max-w-lg lg:W-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1>할 일 목록</h1>
          </div>

          <List todoData={todoData} setTodoData={setTodoData} />

          <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />

        </div>
      </div>
    )
  }
