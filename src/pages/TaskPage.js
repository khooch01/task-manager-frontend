// src/pages/TaskPage.js

import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('title'); // Default search type

    const priorities = ['High', 'Medium', 'Low']; // Define priority options

    const handleAddTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
    };

    const handleEditTask = (editedTask) => {
        const updatedTasks = tasks.map((task) =>
            task === editingTask ? { ...editedTask } : task
        );
        setTasks(updatedTasks);
        setEditingTask(null);
    };

    const handleDeleteTask = (taskToDelete) => {
        const updatedTasks = tasks.filter((task) => task !== taskToDelete);
        setTasks(updatedTasks);
        setEditingTask(null);
    };

    const handleEditClick = (task) => {
        setEditingTask(task);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const filteredTasks = tasks.filter((task) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        if (searchType === 'title') {
            return task.title.toLowerCase().includes(lowerCaseQuery);
        } else if (searchType === 'description') {
            return task.description.toLowerCase().includes(lowerCaseQuery);
        } else if (searchType === 'priority') {
            return task.priority.toLowerCase().includes(lowerCaseQuery);
        } else if (searchType === 'category') {
            return task.category.toLowerCase().includes(lowerCaseQuery);
        }
        return false;
    });

    return (
        <div>
            <h2>Task Manager</h2>

            {/* TaskForm for creating new tasks */}
            <TaskForm onSubmit={handleAddTask} />

            <div style={{ margin: '20px 0' }}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search by..."
                    style={{ marginRight: '10px' }}
                />
                <select value={searchType} onChange={handleSearchTypeChange}>
                    <option value="title">Title</option>
                    <option value="description">Description</option>
                    <option value="priority">Priority</option>
                    <option value="category">Category</option>
                </select>
            </div>

            <h3>Tasks List</h3>
            <ul>
                {filteredTasks.map((task, index) => (
                    <li key={index}>
                        {/* TaskForm for editing tasks */}
                        {editingTask === task ? (
                            <TaskForm
                                onSubmit={handleEditTask}
                                initialTask={task}
                            />
                        ) : (
                            <>
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <p>Priority: {task.priority}</p>
                                <p>Category: {task.category}</p>
                                <button onClick={() => handleEditClick(task)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskPage;
