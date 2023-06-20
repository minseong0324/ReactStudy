// 'Action' interface를 정의합니다. 이는 Redux 액션 객체가 가져야 하는 모양을 정의합니다.
// 모든 Redux 액션은 'type' 필드를 가져야 하며, 이 필드는 액션의 종류를 나타냅니다.
interface Action {
    type: string
}

// 'counter'라는 이름의 Redux 리듀서 함수를 정의합니다. 
// 이 함수는 현재 상태(state)와 액션(action)을 입력으로 받아 새로운 상태를 반환합니다.
// 이 예에서, 상태는 숫자이며 초기값은 0입니다.
const counter = (state = 0, action: Action) => {
    // Redux 액션의 'type' 필드를 기준으로 switch문을 사용하여 다른 작업을 수행합니다.
    switch (action.type) {
      // 'type'이 "INCREMENT"인 경우, 현재 상태에 1을 더하여 반환합니다.
      case "INCREMENT":
        return state + 1;
      // 'type'이 "DECREMENT"인 경우, 현재 상태에서 1을 뺀 값을 반환합니다.
      case "DECREMENT":
        return state - 1;
      // 액션 타입이 "INCREMENT"나 "DECREMENT"가 아닌 경우, 현재 상태를 그대로 반환합니다.
      // 이는 Redux에서 알 수 없는 액션 타입에 대한 표준 처리 방법입니다.
      default:
        return state;
    }
  }
  
// 'counter' 리듀서 함수를 export하여 다른 파일에서 import하여 사용할 수 있게 합니다.
export default counter;
