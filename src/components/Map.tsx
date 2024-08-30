import { useState } from "react";
import { Image, Layer, Stage } from "react-konva";
import useImage from "use-image";

export default function Map() {
  const [baseImage] = useImage("./Mapa/panama base.svg");
  const [captionsImage] = useImage("./Mapa/panama caption.svg");
  const [geoImage] = useImage("./Mapa/panama geo.svg");
  const [ship] = useImage("./Iconos/Recurso 910.svg");

  const [shipX, setShipX] = useState(460);
  const [shipY, setShipY] = useState(280);

  {
    /* // Stage - is a div wrapper
  // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
  // Rect and Circle are not DOM elements. They are 2d shapes on canvas */
  }
  return (
    <Stage width={1500} height={window.innerHeight}>
      <Layer>
        <Image
          image={baseImage}
          alt="panama map"
          width={1200}
          height={window.innerHeight}
        />
      </Layer>
      <Layer>
        <Image
          image={captionsImage}
          alt="captions"
          width={1200}
          height={window.innerHeight}
        />
      </Layer>
      <Layer>
        <Image
          image={geoImage}
          alt="panama geo"
          width={1200}
          height={window.innerHeight}
        />
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
    </Stage>
  );
}
