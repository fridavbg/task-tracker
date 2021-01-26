import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};
		getTasks();
	}, []);

	// FETCH TASKS
	const fetchTasks = async () => {
		const res = await fetch("http://localhost:5000/tasks");
		const data = await res.json();
		return data;
	};

	// FETCH TASK
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();
		return data;
	};

	//ADD TASK
	const addTask = async (task) => {
		const res = await fetch("http://localhost:5000/tasks", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();
		setTasks([...tasks, data]);
	};

	// DELETE TASK
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// TOGGLE REMINDER
	const reminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(updTask),
		});

		const data = await res.json();

		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
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
			<hr />
			<h3 style={{ margin: "10px" }}>Tasks</h3>
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} />
			) : (
				"No tasks to do"
			)}
			<Footer />
		</div>
	);
};

export default App;
