import { useState } from 'react';
import './App.css';

function TaskTracker() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(""); // State for managing input value

    // Function to add new task to tasks array
    function addTask() {
        if (newTask) {
            // Add task as an object with description and isCompleted status
            const newTaskItem = { description: newTask, isCompleted: false };
            setTasks([...tasks, newTaskItem]);
            setNewTask(""); // Clear input after adding the task
        }
    }

    // Function to toggle task completion status
    function toggleCompleted(index) {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, isCompleted: !task.isCompleted }; // Toggle the completion status of the specific task
            }
            return task;
        });
        setTasks(updatedTasks); // Update tasks state
    }

    // Function to delete task item
    function deleteTask(index) {
        const updatedTasks = tasks.filter((task, i) => i !== index); // Filter out
        setTasks(updatedTasks); // Update tasks state
    }

    // Function to clear completed task
    function clearCompleted() {
        const updatedTasks = tasks.filter((task) => !task.isCompleted); // Filter out completed
        setTasks(updatedTasks); // Update tasks state
    }

    // Function to display the list of tasks in the JSX section
    function displayTasks() {
        if (tasks.length === 0) {
            return <p className='empty-tasks'>No tasks left!</p>; // Display message if there are no tasks
        }
    
        return tasks.map((task, index) => {
            return (
                <div key={index}>
                    <ul className="task-list">
                        <label>
                            <li className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
                                <input
                                    type="checkbox"
                                    className="task-checkbox"
                                    checked={task.isCompleted}
                                    onChange={() => toggleCompleted(index)} // Toggle task completion when checkbox is clicked
                                />
                                <span className="task-text">{task.description}</span>
                                <div className="task-buttons">
                                    <button onClick={() => deleteTask(index)} className="delete-task-button">Delete</button>
                                </div>
                            </li>
                        </label>
                    </ul>
                </div>
            );
        });
    }
    

    // JSX element to be returned
    return (
        <div className="task-tracker-container">
            <h1>Task Tracker</h1>

            {/* Input and Add Task */}
            <div className="task-input-container">
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter a new task..."
                    value={newTask} // Controlled input
                    onChange={(e) => setNewTask(e.target.value)} // Update state on input change
                />
                <button onClick={addTask}>Add Task</button>
            </div>

            {/* Task List */}
            <div className="task-list">
                {displayTasks()} {/* Display the tasks here */}
            </div>

            {/* Clear Completed Tasks */}
            <button onClick={clearCompleted} className="clear-completed-btn">Clear Completed</button>
        </div>
    );
}

export default TaskTracker;
