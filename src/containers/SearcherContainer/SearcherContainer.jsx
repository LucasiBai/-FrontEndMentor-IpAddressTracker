import { useState, useEffect } from "react";

import { getIpData } from "../../services/IpSearchService";

import IPSearcher from "../../components/IPSearcher/IPSearcher";
import IPInfoCard from "../../components/IPInfoCard/IPInfoCard";
import MapView from "../../components/MapView/MapView";

import "./SearcherContainer.css";

const SearcherContainer = () => {
	const [ipData, setIpData] = useState({
		ip: "8.8.8.8",
		location: {
			region: "California",
			city: "Mountain View",
			postalCode: "94043",
			country: "US",
			timezone: "UTC -08:00",
			lat: 37.38605,
			lng: -122.08385,
		},
		isp: "Google LLC",
	});

	const [invalidIp, setInvalidIp] = useState(false);

	const handleGetIp = (ip) => {
		if (ip) {
			setInvalidIp(false);
			getData(ip);
		} else {
			setInvalidIp(true);
		}
	};

	const getData = async (ip) => {
		const res = await getIpData(ip).catch((error) => setInvalidIp(true));
		setIpData(res.data);
	};

	useEffect(() => {}, []);
	return (
		<main>
			<div className="interactive__box">
				<IPSearcher handleFunction={handleGetIp} valid={!invalidIp} />
				<IPInfoCard data={ipData} />
			</div>

			<MapView
				coords={[ipData.location.lat, ipData.location.lng]}
				popup={ipData.isp}
			/>
		</main>
	);
};

export default SearcherContainer;
