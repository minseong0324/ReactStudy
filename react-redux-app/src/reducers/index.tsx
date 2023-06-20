// 'combineReducers' 함수를 redux 패키지로부터 import합니다. 
// 이 함수는 여러 개의 리듀서를 하나로 합치는데 사용됩니다.
import { combineReducers } from "redux"

// 각각의 리듀서를 해당하는 파일로부터 import합니다. 
// 'counter' 리듀서와 'todos' 리듀서를 가져옵니다.
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,  
    todos    
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>