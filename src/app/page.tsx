"use client";
import { Stage } from "konva/lib/Stage";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  const [mapActive, setMapActive] = useState(true);
  const [geoActive, setGeoActive] = useState(true);
  const [captionsActive, setCaptionsActive] = useState(true);
  const [shipActive, setShipActive] = useState(true);
  const [ship2Active, setShip2Active] = useState(true);
  const [aditionalActive, setAditionalActive] = useState(true);

  return (
    <main className="flex justify-between">
      <aside className="flex flex-col justify-center w-1/8 mx-2 px-16">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          onClick={() => setMapActive(!mapActive)}
        >
          {mapActive ? "Desactivar" : "Activar"} mapa
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          onClick={() => setCaptionsActive(!captionsActive)}
        >
          {captionsActive ? "Desactivar" : "Activar"} captions
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          onClick={() => setGeoActive(!geoActive)}
        >
          {geoActive ? "Desactivar" : "Activar"} geo
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          onClick={() => setAditionalActive(!aditionalActive)}
        >
          {aditionalActive ? "Desactivar" : "Activar"} capa decorativa
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          onClick={() => setShipActive(!shipActive)}
        >
          {shipActive ? "Desactivar" : "Activar"} barco
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          onClick={() => setShip2Active(!ship2Active)}
        >
          {ship2Active ? "Desactivar" : "Activar"} barco 2
        </button>
      </aside>
      <Map
        mapActive={mapActive}
        geoActive={geoActive}
        captionsActive={captionsActive}
        shipActive={shipActive}
        aditionalActive={aditionalActive}
        ship2Active={ship2Active}
      />
    </main>
  );
}
