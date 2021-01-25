import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appointment",
			day: "Feb 5th at 14:30",
			reminder: true,
		},
		{
			id: 2,
			text: "Meeting at School",
			day: "Feb 5th at 13:30",
			reminder: true,
		},
		{
			id: 3,
			text: "Food Shopping",
			day: "Feb 5th at 13:30",
			reminder: false,
		},
	]);

	//ADD TASK
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 100000 + 1);
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	// DELETE TASK
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// TOGGLE REMINDER
	const reminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className="container">
			<Header />
			<AddTask onAdd={addTask} />
			<h3>Tasks</h3>
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} />
			) : (
				"No tasks to do"
			)}
		</div>
	);
}

export default App;
