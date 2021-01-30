import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClickHandler }) => {
	return (
		<button
			onClick={onClickHandler}
			style={{ backgroundColor: color }}
			className="btn"
		>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: "steelblue",
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func,
};

export default Button;
