import {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

function Map() {
	const [renderStyle, setRenderStyle] = useState({width: 640, height: 480, margin: "auto"});
	const [center, setCenter] = useState([51.505, -0.09]);
	const [zoom, setZoom] = useState(13);

	return (
		<MapContainer
			style={renderStyle}
			center={center}
			zoom={zoom}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				position={[51.505, -0.09]}
			>
				<Popup>
					Popup <span style="color: #2e47aa;">example</span>
				</Popup>
			</Marker>
		</MapContainer>
	);
}

export default Map;