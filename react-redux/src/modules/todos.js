import { createAction, handleActions } from "redux-actions";

// 액션 타입 정의하기
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수 만들기
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 3;

export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

// 초기 상태
const initialState = {
    input: "",
    todos: [
        {
            id: 1,
            text: "리액트 친해지기",
            done: true,
        },
        {
            id: 2,
            text: "리덕스와 친해질까염",
            done: false,
        },
    ],
};

// 리듀서 함수
const todos = handleActions({
    [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    [INSERT]: (state, action) => ({
        ...state,
        todos: state.todos.concat(action.payload),
    }),
    [TOGGLE]: (state, action) => ({
        ...state,
        todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
    }),
    [REMOVE]: (state, action) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
});

export default todos;
