import React, { useEffect, useState } from "react";
import axios from "axios";

function Map({ onRoomSelect }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // API에서 자취방 정보 가져오기
    axios.get("/api/rooms").then((response) => {
      setRooms(response.data);
    });
  }, []);

  function handleRoomClick(room) {
    onRoomSelect(room.id);
  }

  return (
    <div>
      {/* 지도를 보여주는 코드 */}
      {rooms.map((room) => (
        <Marker
          key={room.id}
          position={room.position}
          onClick={() => handleRoomClick(room)}
        />
      ))}
    </div>
  );
}

export default Map;
