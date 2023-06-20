// 'ActionType'이라는 이름의 enum을 생성합니다. 이 enum은 액션의 type 필드에 사용될 문자열 상수들을 정의합니다.
// 여기서는 "ADD_TODO"와 "DELETE_TODO" 두 가지 타입이 정의되어 있습니다.
enum ActionType {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO"
}

// 'Action'이라는 interface를 정의합니다. 이 interface는 액션 객체의 구조를 정의하는데 사용됩니다.
// 여기서는 type 필드는 'ActionType' enum으로 정의되고, text 필드는 string으로 정의되어 있습니다.
interface Action {
    type: ActionType;
    text: string;
}

// 'todos'라는 리듀서 함수를 정의합니다. 이 함수는 현재 상태(state)와 액션 객체(action)를 받아서
// 새로운 상태를 반환하는 함수입니다.
// 여기서는 초기 상태를 빈 배열로 설정하고 있습니다.
const todos = (state = [], action: Action) => {
    switch (action.type) {
      // 액션 타입이 "ADD_TODO"인 경우, 새로운 할 일 텍스트를 상태 배열의 끝에 추가하여 반환합니다.
      case "ADD_TODO":
        return [...state, action.text]
      // 그 외의 액션 타입에 대해서는 현재 상태를 그대로 반환합니다.
      default:
        return state;
    }
}

// 'todos' 리듀서를 export하여 다른 파일에서 import하여 사용할 수 있게 합니다.
export default todos;
