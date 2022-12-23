import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import "./Advertisement.css";
import Marquee from "react-fast-marquee";

const Advertisement = ({ message, backgroundColor, color, handleCloseAd }) => {
	return (
		<div
			className="advertisement__box"
			style={{ backgroundColor: backgroundColor && backgroundColor }}
		>
			<div style={{ padding: "1rem", width: "95%" }}>
				<Marquee gradientColor={[241, 162, 13]} gradientWidth={5}>
					{message}
				</Marquee>
			</div>

			<button onClick={handleCloseAd}>
				<FontAwesomeIcon icon={faX} />
			</button>
		</div>
	);
};

export default Advertisement;
