import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};
		getTasks();
	}, []);

	//FETCH TASKS
	const fetchTasks = async () => {
		const res = await fetch("http://localhost:5000/tasks");
		const data = await res.json();
		return data;
	};

	//ADD TASK
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 100000 + 1);
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	// DELETE TASK
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
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
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
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
