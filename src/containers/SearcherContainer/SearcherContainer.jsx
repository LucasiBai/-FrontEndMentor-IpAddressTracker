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
	const [updateMap, setUpdateMap] = useState(false);

	const [invalidIp, setInvalidIp] = useState(false);
	const [invalidMsg, setInvalidMsg] = useState("");

	const handleGetIp = (ip) => {
		if (ip) {
			setInvalidIp(false);
			getData(ip);
		} else {
			setInvalidIp(true);
		}
	};

	const getData = async (ip) => {
		const res = await getIpData(ip).catch((error) => {
			if (error.code === "ERR_BAD_REQUEST") {
				setInvalidMsg("The entered IP is invalid.");
			} else {
				setInvalidMsg(
					"Something went wrong. If you are using AdBlock, please disable it.",
				);
			}
			setInvalidIp(true);
		});
		setIpData(res.data);
		setUpdateMap(true);
		setTimeout(() => {
			setUpdateMap(false);
		}, 100);
	};

	useEffect(() => {}, [ipData]);
	return (
		<main>
			<div className="interactive__box">
				<IPSearcher
					handleFunction={handleGetIp}
					valid={!invalidIp}
					invalidMsg={invalidMsg}
				/>
				<IPInfoCard data={ipData} />
			</div>

			{!updateMap && (
				<MapView
					coords={[ipData.location.lat, ipData.location.lng]}
					popup={ipData.isp}
				/>
			)}
		</main>
	);
};

export default SearcherContainer;
