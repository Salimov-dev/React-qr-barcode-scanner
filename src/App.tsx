import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function App() {
  const [data, setData] = useState("Not Found");
  const [torchOn, setTorchOn] = useState(false);
  const [cameraState, setCameraState] = useState(true);
  const [facingMode, setFacingMode] = useState("environment"); // Начальное состояние - тыльная камера

  const handleUpdate = (err, result) => {
    setData(result.text);
  };

  const handleScanNext = () => {
    setData("Not Found");
  };

  return (
    <>
      <button onClick={() => setCameraState(true)}>вкл камера</button>
      <button onClick={() => setCameraState(false)}>выкл камера</button>
      <button
        onClick={() =>
          setFacingMode(facingMode === "environment" ? "user" : "environment")
        }
      >
        Переключить камеру
      </button>
      {cameraState && (
        <BarcodeScannerComponent
          width={900}
          height={900}
          torch={torchOn}
          onUpdate={handleUpdate}
          facingMode={facingMode} // Указываем, какую камеру использовать
        />
      )}
      <h1>{data}</h1>
      <button onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </button>
      <button onClick={handleScanNext}>Scan Next</button>
    </>
  );
}

export default App;
