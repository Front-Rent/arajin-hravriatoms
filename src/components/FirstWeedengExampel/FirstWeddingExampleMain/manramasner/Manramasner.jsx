import Ekexeci from "./ekexeci/Ekexeci";
import Restoran from "./restoran/Restoran";

import "./Manramasner.scss";
import { useState } from "react";

const Manramasner = () => {
  const [openMap, setOpenMap] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <section id="manramasner" className="manramasner">
      <h2>Մանրամասներ</h2>
      <div className="manramasner-detals">
        <Ekexeci
          openMap={openMap}
          setOpenMap={setOpenMap}
          setIsMapOpen={setIsMapOpen}
          isMapOpen={isMapOpen}
          mapId="ekexeci"
        />
        <Restoran
          openMap={openMap}
          setOpenMap={setOpenMap}
          setIsMapOpen={setIsMapOpen}
          isMapOpen={isMapOpen}
          mapId="restoran"
        />
      </div>
    </section>
  );
};

export default Manramasner;
