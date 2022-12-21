import "./IPInfoCard.css";

const get_initials = (word) => {
	const words = word.split(" ");
	const initials = [];

	for (let currentWord of words) {
		if (currentWord.length > 0) {
			initials.push(currentWord[0]);
		}
	}

	return initials.join("");
};

const IPInfoCard = ({ data }) => {
	return (
		<section className="ip-info-card__box">
			<article>
				<h4>IP ADDRESS</h4>
				<h5>{data.ip}</h5>
			</article>

			<div>
				<hr />
				<article>
					<h4>LOCATION</h4>
					<h5>{`${data.location.region}, ${get_initials(data.location.city)} ${
						data.location.postalCode
					}`}</h5>
				</article>
			</div>

			<div>
				<hr />
				<article>
					<h4>TIMEZONE</h4>
					<h5>{data.location.timezone}</h5>
				</article>
			</div>

			<div>
				<hr />
				<article>
					<h4>ISP</h4>
					<h5>{data.isp}</h5>
				</article>
			</div>
		</section>
	);
};

export default IPInfoCard;
