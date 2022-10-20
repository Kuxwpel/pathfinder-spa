import React from "react";

import Boralus from "../assets/boralus.jpg";
import Ironforge from "../assets/ironforge.jpg";
import Stormwind from "../assets/stormwind.jpg";
import Stormgardekeep from "../assets/stormgardekeep.jpg";
import Proudmoorekeep from "../assets/proudmoorekeep.jpg";
import Chillbreeze from "../assets/chillbreezevalleysacrophagus.jpg";
import Burningsteppes from "../assets/burningsteppes.jpg";

import SelectsCard from "./SelectsCard";

const Travel = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={Boralus} text="Rzeszów" />
      <SelectsCard bg={Ironforge} text="Ironforge" />
      <SelectsCard bg={Stormwind} text="Stormwind" />
      <SelectsCard bg={Stormgardekeep} text="Storgarde Keep" />
      <SelectsCard bg={Proudmoorekeep} text="Proudmoore Keep" />
      <SelectsCard bg={Chillbreeze} text="Chillbreeze Sarcophagus" />
      <SelectsCard bg={Burningsteppes} text="Burningsteppes" />
    </div>
  );
};
export default Travel;
