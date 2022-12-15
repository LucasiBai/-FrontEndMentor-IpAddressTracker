import { Fragment } from "react";
import { useDetectAdBlock } from "adblock-detect-react";

const AdBlockDetectContainer = ({ children }) => {
	const adBlockDetected = useDetectAdBlock();

	return (
		<Fragment>
			{adBlockDetected && (
				<div
					style={{
						position: "fixed",
						width: "100vw",
						height: "100vh",
						backgroundColor: "#00000096",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						zIndex: 100,
					}}
				>
					<h6 style={{ fontSize: 28, color: "aliceblue" }}>
						Please disable AdBlock to make the app work.
					</h6>
				</div>
			)}
			{children}
		</Fragment>
	);
};

export default AdBlockDetectContainer;
