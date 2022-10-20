import React from "react";

import Boralus from "../assets/boralus.jpg";
import Ironforge from "../assets/ironforge.jpg";
import Stormwind from "../assets/stormwind.jpg";
import Stormgardekeep from "../assets/stormgardekeep.jpg";
import Proudmoorekeep from "../assets/proudmoorekeep.jpg";
import Chillbreeze from "../assets/chillbreezevalleysacrophagus.jpg";
import Burningsteppes from "../assets/burningsteppes.jpg";
const Destinations = () => {
  return (
    <div className="nax-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">Pick your poison</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={Boralus}
          alt="/"
          title="Boralus"
        />
        <img
          className="w-full h-full object-cover"
          src={Ironforge}
          alt="/"
          title="Ironforge"
        />
        <img
          className="w-full h-full object-cover"
          src={Stormwind}
          alt="/"
          title="Stormwind"
        />
        <img
          className="w-full h-full object-cover"
          src={Stormgardekeep}
          alt="/"
          title="Stormgarde Keep"
        />
        <img
          className="w-full h-full object-cover"
          src={Proudmoorekeep}
          alt="/"
          title="Proudmoore Keep"
        />
        <img
          className="w-full h-full object-cover"
          src={Chillbreeze}
          alt="/"
          title="Chillbreeze Sarcophagus"
        />
        <img
          className="w-full h-full object-cover"
          src={Burningsteppes}
          alt="/"
          title="Mount Doom"
        />
      </div>
    </div>
  );
};
export default Destinations;
