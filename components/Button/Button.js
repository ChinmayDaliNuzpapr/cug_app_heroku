import React from 'react';

const Button = (props) => {
	return (
		<button
			className={`bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded ${props.width}`}>
			{props.content}
		</button>
	);
};

export default Button;
