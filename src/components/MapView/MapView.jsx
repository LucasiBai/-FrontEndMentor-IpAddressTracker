import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./MapView.css";

const MapView = ({ coords, popup }) => {
	console.log(coords);
	return (
		<div className="map-view__box">
			<MapContainer center={coords} zoom={20} scrollWheelZoom={true}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={coords}>
					<Popup>The current IP is in {popup}</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapView;
