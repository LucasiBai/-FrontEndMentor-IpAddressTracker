import { useState } from "react";

import "./IPSearcher.css";

const ArrowIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
		<path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
	</svg>
);

const IPSearcher = ({ handleFunction }) => {
	const [formData, setFormData] = useState({ ip: "" });

	const handleCheckInputValue = (e) => {
		const { value } = e.target;
		const lastValueIdx = value.length - 1;

		if (
			value[lastValueIdx] === undefined ||
			value[lastValueIdx].match(/[0-9]|\./)
		) {
			updateFormData(e);
		}
	};

	const updateFormData = (e) => {
		const { name: inputName, value: newValue } = e.target;

		const updatedData = { ...formData };
		updatedData[inputName] = newValue;

		setFormData(updatedData);
	};

	const handleOnClick = (e) => {
		e.preventDefault();
		if (formData.ip) {
			handleFunction(formData.ip);
		}
	};

	return (
		<form className="ip-searcher__box" onSubmit={handleOnClick}>
			<input
				type="text"
				name="ip"
				value={formData.ip}
				placeholder="Search for any IP address or domain"
				onChange={handleCheckInputValue}
			/>
			<button
				style={{
					background: "black",
					border: "none",
					padding: "1.2rem 1.5rem",
					borderRadius: "0 15px 15px 0",
				}}
				type="submit"
			>
				<ArrowIcon />
			</button>
		</form>
	);
};

export default IPSearcher;
