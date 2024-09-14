Welcome to Task Tracker App

This is a simple React app where users can add, complete, and remove tasks. This app will help users keep track of their daily to-dos. It uses React state to manage tasks and their statuses.

Its main features include:

1. Input Field and Add Task Button:
> It has an input field where the user can type a new task and a button to add the task to a list.
> When the user clicks the "Add Task" button, the new task is added to the list of tasks, and the input field is cleared.

2. Display List of Tasks:
> All the tasks are displayed in a list, each with a checkbox and a delete button.

3. Complete Task:
> Each task in the list has a checkbox which when checked crosses out the task. This is visually indicated by a line-through style.
> When the checkbox is unchecked, the task is marked as incomplete again by removing the line-through style.

4. Delete Task:
> Each task has a delete button which when clicked removes the task from the list.

5. Clear All Completed Tasks:
> The app also has a "Clear Completed" button that removes all tasks that are marked as completed.
> The app aslo displays the message "No tasks left!" when there are no tasks in the list.

// Use the Example Workflow below to confirm that the app works fine:
1. The app has the text "No tasks left!" in the list section when the app is initially launched.
2. The user types "Buy groceries" in the input field and clicks "Add Task."
3. The task "Buy groceries" is added to the list with an unchecked checkbox and a delete button, and the initial "No tasks left!" text disappears.
4. The user marks the task as completed, and the task is visually updated (i.e., with a line-through).
5. The user adds another task, "Read a book," which is added below the previous one.
6. The user clicks "Clear Completed," and the first task is removed, leaving only the incomplete tasks.
7. Clicking the "Delete" button that corresponds to the remaining "Read a book" task removes the task from the list, and the "No tasks left!" text reappears in the list section.

Note:
1. This is a simple implementation and does not include any error checking or validation. It is intended to demonstrate the basic functionality of a task tracker app. 
2. Furthermore, it does not persist data across page reloads. For a real-world application, you would need to use a database or local storage to persist data.
3. The app can be restructured in multiple other  ways to improve its functionality and user experience, hence one is NOT limited to a single component as portrayed in this example.

This app was made with ❤️ by <a href="https://github.com/yahya-mohamed-1" target="_blank">Yahya Mohamed</a>