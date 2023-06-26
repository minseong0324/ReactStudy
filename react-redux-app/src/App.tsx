import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import axios from 'axios';
import { openStdin } from 'process';
import { fetchPosts } from './actions/posts';

type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

interface Post {
  userId: number;
    id: number;
    title: string;
}

function App({ value, onIncrement, onDecrement }: Props) {
  // useDispatch() 함수를 사용해 dispatch 함수를 가져옵니다. 
  // 이 dispatch 함수는 Redux store에 액션을 보내는 역할을 합니다.
  const dispatch = useDispatch() //useDispatch()를 react-redux에서 가져온다.
  const todos: string[] = useSelector((state: RootState) => state.todos)
  const counter = useSelector((state: RootState) => state.counter);
  const posts: Post[] = useSelector((state: RootState) => state.posts)
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])





  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // dispatch 함수를 사용해 ADD_TODO 액션을 보냅니다. 
    // 이 액션은 todoValue를 텍스트로 가지는 새로운 할 일을 추가하라는 신호입니다.
    dispatch({ type: 'ADD_TODO', text: todoValue}) // 위에서 가져온 useDispatch를 정의한 dispatch를 
    setTodoValue("");
  }

  return (
    <div className="App">
      Clicked: {counter} times
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>

    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>

      <ul>
        {posts.map((post, index) => <li key={index}>{post.title}</li>)}
      </ul>

    </div>
  );
}

export default App;
