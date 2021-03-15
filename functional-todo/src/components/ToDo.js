import React from 'react';

const ToDo = ({ todo, handleToggle }) => {
    return (
        <div onClick={() => handleToggle(todo.id)} className={ todo.complete ? "strike": "" }>
            { todo.task }
        </div>
    );
};

export default ToDo;