import { Marker, Popup } from "react-leaflet";

function Map({ rooms }) {
  return (
    <MapContainer center={[37.5642135, 126.9748747]} zoom={15}>
      {rooms.map((room) => (
        <Marker key={room.id} position={room.position}>
          <Popup>
            <div>
              <h2>{room.name}</h2>
              <p>주소: {room.address}</p>
              <p>월세: {room.price}만원</p>
              <p>방 종류: {room.type}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
