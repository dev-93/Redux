const divToggle = document.querySelector(".toggle");
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// action = 상태에 변화를 일으키는 것
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// action creator = action 객체를 만드는 action 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH});
const increase = (difference) => ({ type: INCREASE, difference});
const decrease = () => ({ type: DECREASE});

// 초깃값 설정
const initialState = {
    toggle: false,
    counter: 0,
}

// 리듀서 함수, reducer = 변화를 일으키는 함수, state, action을 인자로 받음
function reducer (state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + ction.differencea
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter -1
            };
        default:
            return state;
    }
}

