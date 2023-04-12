import { Marker, Popup } from "react-leaflet";

function Map({ rooms }) {
  return (
    <MapContainer center={[37.5642135, 126.9748747]} zoom={15}>
      {rooms.map((room) => (
        <Marker key={room.id} position={room.position}>
          <Popup>{room.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
