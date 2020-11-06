import React from "react";

const TodoItem = ({ todo, onRemove, onToggle }) => {
    return (
        <div>
            <input
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    );
};

const Todos = ({ input, todos, onChangeInput, onInsert, onRemove, onToggle }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onInsert(input);
        onChangeInput("");
    };

    const onChange = (e) => onChangeInput(e.target.value);
    return (
        <>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={input} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
                ))}
            </div>
        </>
    );
};

export default Todos;
