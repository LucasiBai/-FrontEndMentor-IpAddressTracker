import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./MapView.css";

const MapView = ({ coords, popup }) => {
	return (
		<div className="map-view__box">
			<MapContainer center={coords} zoom={20} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={coords}>
					<Popup>The current IP is in {popup}</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapView;
