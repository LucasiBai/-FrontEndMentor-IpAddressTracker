import { useState } from "react";

import "./IPSearcher.css";

const ArrowIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
		<path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
	</svg>
);

const IPSearcher = ({ handleFunction, valid, invalidMsg }) => {
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

	const setPlaceHolder = () => {
		if (window.innerWidth > 576) {
			return "Search for any IP address or domain";
		}
		return "Search for any IP address";
	};

	return (
		<form className="ip-searcher__box" onSubmit={handleOnClick}>
			<div>
				<input
					type="text"
					name="ip"
					value={formData.ip}
					placeholder={setPlaceHolder()}
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
			</div>
			{!valid && (
				<label style={{ color: "rgb(255 86 78)", margin: "0.5rem 0.5rem" }}>
					{invalidMsg}
				</label>
			)}
		</form>
	);
};

export default IPSearcher;
