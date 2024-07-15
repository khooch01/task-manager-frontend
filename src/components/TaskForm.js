// src/components/TaskForm.js

import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialTask }) => {
    const priorities = ['High', 'Medium', 'Low']; // Define priority options

    const [task, setTask] = useState(initialTask || { title: '', description: '', priority: '', category: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task);
        setTask({ title: '', description: '', priority: '', category: '' }); // Clear form fields after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
            <input
                type="text"
                name="description"
                value={task.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <select
                name="priority"
                value={task.priority}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Select Priority</option>
                {priorities.map((priority, index) => (
                    <option key={index} value={priority.toLowerCase()}>{priority}</option>
                ))}
            </select>
            <input
                type="text"
                name="category"
                value={task.category}
                onChange={handleChange}
                placeholder="Category"
                required
            />
            <button type="submit">{initialTask ? 'Save Changes' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;
