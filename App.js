import React, { useState } from "react";
import Map from "./Map";
import RoomInfo from "./RoomInfo";

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div>
      <Map onRoomSelect={setSelectedRoom} />
      {selectedRoom && <RoomInfo roomId={selectedRoom} />}
    </div>
  );
}

export default App;
