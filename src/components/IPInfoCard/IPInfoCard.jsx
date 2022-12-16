import "./IPInfoCard.css";

const IPInfoCard = ({ data }) => {
	return (
		<section className="ip-info-card__box">
			<article>
				<h4>IP ADDRESS</h4>
				<h5>{data.ip}</h5>
			</article>
			<article>
				<h4>LOCATION</h4>
				<h5>{data.location.country}</h5>
			</article>
			<article>
				<h4>TIMEZONE</h4>
				<h5>{data.location.timezone}</h5>
			</article>
			<article>
				<h4>ISP</h4>
				<h5>{data.isp}</h5>
			</article>
		</section>
	);
};

export default IPInfoCard;
