import { useState, useEffect, Fragment } from "react";

import { getIpData } from "../../services/IpSearchService";

import IPSearcher from "../../components/IPSearcher/IPSearcher";
import IPInfoCard from "../../components/IPInfoCard/IPInfoCard";
import MapView from "../../components/MapView/MapView";

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
				<Fragment>
					<IPInfoCard data={ipData} />
					<MapView
						coords={[ipData.location.lat, ipData.location.lng]}
						popup={ipData.isp}
					/>
				</Fragment>
			)}
		</main>
	);
};

export default SearcherContainer;
