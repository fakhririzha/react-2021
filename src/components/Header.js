import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				color={showAdd ? "tomato" : "green"}
				text={showAdd ? "Close" : "Add"}
				onClickHandler={onAdd}
			></Button>
		</header>
	);
};

// Jika tidak ada passing value di App.js, maka props.title akan nge-load default property yang di definisikan dibawah
Header.defaultProps = {
	title: "Task Tracker",
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// Internal styling css
// const headerStyle = {
// 	color: "tomato",
// 	backgroundColor: "darkslategray",
// };

export default Header;
