import "./Advertisement.css";

const Advertisement = ({ message, backgroundColor, color, handleCloseAd }) => {
	return (
		<div
			className="advertisement__box"
			style={{ backgroundColor: backgroundColor && backgroundColor }}
		>
			<div>
				<span style={{ color: color && color }}>{message}</span>
				<span style={{ color: color && color }}>{message}</span>
			</div>

			<button onClick={handleCloseAd}>X</button>
		</div>
	);
};

export default Advertisement;
