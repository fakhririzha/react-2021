import { useState } from "react";

const Tasks = () => {
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

	return (
		<>
			{tasks.map((task) => (
				<h3 key={task.id}>{task.text}</h3>
			))}
		</>
	);
};

export default Tasks;
