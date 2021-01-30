function App() {
	const name = "Fakhri";
	const x = true;

	return (
		<div className="container">
			<h1>Hello from React!</h1>
			<h2>Hello {x ? name : ", world!"}</h2>
		</div>
	);
}

export default App;
