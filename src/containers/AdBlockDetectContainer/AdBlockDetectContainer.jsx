import { Fragment, useState } from "react";
import { useDetectAdBlock } from "adblock-detect-react";
import Advertisement from "../../components/Advertisement/Advertisement";

const AdBlockDetectContainer = ({ children }) => {
	const [showAdvertisement, setShowAdvertisement] = useState(true);
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
						zIndex: 1002,
					}}
				>
					<h6 style={{ fontSize: 28, color: "aliceblue", textAlign: "center" }}>
						Please disable AdBlock to make the app work.
					</h6>
				</div>
			)}
			{children}
			{showAdvertisement && (
				<Advertisement
					message={
						"Attention! If you are using Brave Browser to visit this page, I strongly recommend that you disable Brave Shields, otherwise the application won't work. "
					}
					handleCloseAd={() => {
						setShowAdvertisement(false);
					}}
				/>
			)}
		</Fragment>
	);
};

export default AdBlockDetectContainer;
