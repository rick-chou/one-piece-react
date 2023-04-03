import React from 'react';
type ButtonProps = {
	text: string;
	onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<div
			onClick={() => {
				onClick();
				onClick();
				onClick();
			}}>
			{text}
		</div>
	);
};

export default Button;
