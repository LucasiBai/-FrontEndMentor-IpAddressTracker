import { useState, useEffect } from "react";

import { getIpData } from "../../services/IpSearchService";

import IPSearcher from "../../components/IPSearcher/IPSearcher";

const SearcherContainer = () => {
	const [ipData, setIpData] = useState();

	const handleGetIp = (ip) => {
		getData(ip);
	};

	const getData = async (ip) => {
		const res = await getIpData(ip);
		setIpData(res.data);
		console.log(res);
	};

	useEffect(() => {}, []);
	return (
		<main>
			<IPSearcher handleFunction={handleGetIp} />
			{ipData && (
				<section>
					<article>
						<h4>IP ADDRESS</h4>
						<h5>{ipData.ip}</h5>
					</article>
					<article>
						<h4>LOCATION</h4>
						<h5>{ipData.location.country}</h5>
					</article>
					<article>
						<h4>TIMEZONE</h4>
						<h5>{ipData.location.timezone}</h5>
					</article>
					<article>
						<h4>ISP</h4>
						<h5>{ipData.isp}</h5>
					</article>
				</section>
			)}
		</main>
	);
};

export default SearcherContainer;
