import { useState } from "react";
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

	// DELETE TASK
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className="container">
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} />
			) : (
				"No tasks to do"
			)}
		</div>
	);
}

export default App;
