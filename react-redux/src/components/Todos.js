import React from "react";

const TodoItem = ({ todo, onRomove, onToggle }) => {
    return (
        <>
            <input type="checkbox" />
            <span>예제 텍스트</span>
            <button>삭제</button>
        </>
    );
};

const Todos = ({ input, todos, onChangeInput, onInsert, onRemove, onToggle }) => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </>
    );
};

export default Todos;
