"use client";
import Konva from "konva";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import baseImage from '../images/Mapa/panama base.svg';
import captionsImage from '../images/Mapa/panama caption.svg';
import geoImage from '../images/Mapa/panama geo.svg';
import useImage from "use-image";

export default function Home() {
  const [baseImage] = useImage('./Mapa/panama base.svg');
  const [captionsImage] = useImage('./Mapa/panama caption.svg');
  const [geoImage] = useImage('./Mapa/panama geo.svg');
  const [ship] = useImage('./Iconos/Recurso 910.svg');

  console.log(window.innerWidth);

  return (
    <main className="flex justify-center">
      {/* // Stage - is a div wrapper
      // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
      // Rect and Circle are not DOM elements. They are 2d shapes on canvas */}
      <Stage width={1500} height={window.innerHeight}>
        <Layer>
          <Image image={baseImage} alt="panama map" width={1200}  height={window.innerHeight} />
          <Image x={460} y={280} image={ship} alt="panama map" width={80}  height={80} />
        </Layer>
        <Layer>
          <Image image={captionsImage} alt="captions" width={1200} height={window.innerHeight}/>
        </Layer>
        <Layer>
          <Image image={geoImage} alt="panama geo" width={1200} height={window.innerHeight} />
        </Layer>
      </Stage>
    </main>
  );
}
