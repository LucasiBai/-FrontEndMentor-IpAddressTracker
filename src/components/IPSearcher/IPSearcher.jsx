import { useState } from "react";

const IPSearcher = () => {
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

	return (
		<form>
			<input
				type="text"
				name="ip"
				value={formData.ip}
				onChange={handleCheckInputValue}
			/>
			<button />
		</form>
	);
};

export default IPSearcher;
