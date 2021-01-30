import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Tugas Besar EDS",
			day: "Jan 31st at 10.00am",
			reminder: true,
		},
		{
			id: 2,
			text: "Pilgub Fasilkom-TI",
			day: "Mar 13th at 14.00pm",
			reminder: true,
		},
		{
			id: 3,
			text: "Kuliah Semester Genap",
			day: "Feb 15th at 08.00am",
			reminder: false,
		},
	]);

	// Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;

		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	// Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle Reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className="container">
			<Header></Header>
			<AddTask onAdd={addTask}></AddTask>
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				></Tasks>
			) : (
				"No Task To Show"
			)}
		</div>
	);
};

export default App;
