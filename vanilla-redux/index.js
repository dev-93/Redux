import {createStore} from 'redux';

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector('h2');
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
                counter: state.counter + acction.differencea
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

// 스토어 만들기
const store = createStore(reducer);

// render 함수 만들기, 상태가 업데이트될 때마다 호출
// html을 사용하여 만들어진 UI 속성을 상태에 따라 변경해줌
const render = () => {
    const state = store.getState();

    // 토글 처리
    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
}

render();
// 구독하기, store 상태가 바뀔때마다 render 함수 호출되도록
// store 내장함수 subscribe, 인자로 함수 형태의 값을 전달
store.subscribe(render);


// dispatch, 액션 발생시키기, 인자는 액션 객체로
// 이벤트 함수 내부에서는 dispatch 함수를 사용해 액션을 스토어에게 전달
divToggle.onClick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onClick = () => {
    store.dispatch(increase(1));
}
btnDecrease.onClick = () => {
    alert(100);
    store.dispatch(decrease());
}