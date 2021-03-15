import React from 'react';
import ToDo from './ToDo';
import { nanoid } from 'nanoid';

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo key={nanoid()} todo={todo} handleToggle={handleToggle} />
                )
            })}
            <button onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;