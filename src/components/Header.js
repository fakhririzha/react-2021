import PropTypes from "prop-types";

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

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
