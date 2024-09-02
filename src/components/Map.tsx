import jsPDF from "jspdf";
import { Stage as KStage } from "konva/lib/Stage";
import { MutableRefObject, RefObject, useRef, useState } from "react";
import { Image, Layer, Stage } from "react-konva";
import useImage from "use-image";

export default function Map({
  mapActive,
  captionsActive,
  geoActive,
  shipActive,
}: {
  mapActive: boolean;
  geoActive: boolean;
  captionsActive: boolean;
  shipActive: boolean;
  
}) {
  const mapRef = useRef<KStage>(null)
  const [baseImage] = useImage("./Mapa/panama base.svg");
  const [captionsImage] = useImage("./Mapa/panama caption.svg");
  const [geoImage] = useImage("./Mapa/panama geo.svg");
  const [ship] = useImage("./Iconos/Recurso 910.svg");

  const [shipX, setShipX] = useState(460);
  const [shipY, setShipY] = useState(280);

  const exportPdf = () => {
    const stage = mapRef.current?.getStage();
    if (!stage) {
      console.log('data null');
      return
    }

    var pdf = new jsPDF('l', 'px', [1400, 911]);
    pdf.addImage(
      stage.toDataURL({ pixelRatio: 2 }),
      100,
      0,
      1400,
      911
    );

    pdf.save('panamaMap.pdf');
    /* const data = stage.toDataURL({ mimeType: 'image/jpeg', quality: 1 })

    const link = document.createElement('a');
    link.href = data;
    link.download = 'map.jpg';
    link.click(); */
  }
  {
    /* // Stage - is a div wrapper
  // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
  // Rect and Circle are not DOM elements. They are 2d shapes on canvas */
  }
  return (
    <div className="flex">
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 mx-2 h-12"
          onClick={exportPdf}
        >
          Exportar
        </button>
      <Stage width={1400} height={911} ref={mapRef}>
        {mapActive ? (
          <Layer>
            <Image image={baseImage} alt="panama map" width={1200} height={911} />
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
            <Image image={geoImage} alt="panama geo" width={1200} height={911} />
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
      </Stage>
    </div>
  );
}
