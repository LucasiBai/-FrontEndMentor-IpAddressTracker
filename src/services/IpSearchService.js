import { enviroment } from "../enviroment";
import axios from "axios";

const getIpData = async (ip) => {
	const URL = `https://geo.ipify.org/api/v2/country?apiKey=${enviroment.geoApiKey}&ipAddress=${ip}`;

	const res = await axios.get(URL);
	const data = await res;

	return data;
};

export { getIpData };
