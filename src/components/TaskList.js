import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskList = ({ onEdit, onDelete }) => {
    const { tasks } = useTasks();

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Category: {task.category}</p>
                    <p>Priority: {task.priority}</p>
                    <button onClick={() => onEdit(task)}>Edit</button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
