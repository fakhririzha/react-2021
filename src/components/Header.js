const Header = ({ title }) => {
	return (
		<header>
			<h1>{title}</h1>
		</header>
	);
};

// Jika tidak ada passing value di App.js, maka props.title akan nge-load default property yang di definisikan dibawah
// Header.defaultProps = {
// 	title: "Task Tracker",
// };

export default Header;
