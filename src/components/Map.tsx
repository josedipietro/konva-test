import jsPDF from "jspdf";
import { Stage as KStage } from "konva/lib/Stage";
import { useRef, useState } from "react";
import { Image, Layer, Stage } from "react-konva";
import useImage from "use-image";

export default function Map({
  mapActive,
  captionsActive,
  geoActive,
  shipActive,
  aditionalActive,
  ship2Active
}: {
  mapActive: boolean;
  geoActive: boolean;
  captionsActive: boolean;
  aditionalActive: boolean;
  shipActive: boolean;
  ship2Active: boolean;
}) {
  const mapRef = useRef<KStage>(null);
  const [baseImage] = useImage("./Mapa/panama base.svg");
  const [captionsImage] = useImage("./Mapa/panama caption.svg");
  const [geoImage] = useImage("./Mapa/panama geo.svg");
  const [aditionalImage] = useImage("./Capa/1.svg");
  const [ship] = useImage("./Iconos/Recurso 910.svg");
  const [ship2] = useImage("./Iconos/Recurso 810.svg");

  const [shipX, setShipX] = useState(460);
  const [shipY, setShipY] = useState(280);

  const [ship2X, setShip2X] = useState(240);
  const [ship2Y, setShip2Y] = useState(580);

  const exportPdf = () => {
    const stage = mapRef.current?.getStage();
    if (!stage) {
      console.log("data null");
      return;
    }

    var pdf = new jsPDF("l", "px", [1400, 911]);
    pdf.addImage(stage.toDataURL({ pixelRatio: 2 }), 100, 0, 1400, 911);

    pdf.save("panamaMap.pdf");
    /* const data = stage.toDataURL({ mimeType: 'image/jpeg', quality: 1 })

    const link = document.createElement('a');
    link.href = data;
    link.download = 'map.jpg';
    link.click(); */
  };

  const exportImage = () => {
    const stage = mapRef.current?.getStage();
    if (!stage) {
      console.log("data null");
      return;
    }

    const data = stage.toDataURL({ mimeType: "image/jpeg", quality: 1 });

    const link = document.createElement("a");
    link.href = data;
    link.download = "map.jpg";
    link.click();
  };
  {
    /* // Stage - is a div wrapper
  // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
  // Rect and Circle are not DOM elements. They are 2d shapes on canvas */
  }
  return (
    <div className="flex">
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded my-4 mx-2 h-14"
          onClick={exportPdf}
        >
          Exportar PDF
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded my-4 mx-2 h-14"
          onClick={exportImage}
        >
          Exportar imagen
        </button>
      </div>
      <Stage width={1400} height={911} ref={mapRef}>
        {mapActive ? (
          <Layer>
            <Image
              image={baseImage}
              alt="panama map"
              width={1200}
              height={911}
            />
          </Layer>
        ) : null}
        {captionsActive ? (
          <Layer>
            <Image
              image={captionsImage}
              alt="captions"
              width={1200}
              height={911}
            />
          </Layer>
        ) : null}
        {geoActive ? (
          <Layer>
            <Image
              image={geoImage}
              alt="panama geo"
              width={1200}
              height={911}
            />
          </Layer>
        ) : null}
        {aditionalActive ? (
          <Layer>
            <Image
              image={aditionalImage}
              alt="panama geo"
              width={1200}
              height={911}
            />
          </Layer>
        ) : null}
        {shipActive ? (
          <Layer>
            <Image
              x={shipX}
              y={shipY}
              image={ship}
              alt="panama map"
              width={80}
              height={80}
              draggable
              onDragEnd={(e) => {
                setShipX(e.target.x());
                setShipY(e.target.y());
              }}
            />
          </Layer>
        ) : null}
        {ship2Active ? (
          <Layer>
            <Image
              x={ship2X}
              y={ship2Y}
              image={ship2}
              alt="panama map"
              width={80}
              height={80}
              draggable
              onDragEnd={(e) => {
                setShip2X(e.target.x());
                setShip2Y(e.target.y());
              }}
            />
          </Layer>
        ) : null}
      </Stage>
    </div>
  );
}
