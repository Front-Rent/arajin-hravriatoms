import ErbEvVortex from "./erb ev vortex/ErbEvVortex";
import EsHamadzaynEm from "./esHamadzaynEm/EsHamadzaynEm";
import Glxavor from "./glxavor/Glxavor";
import Hethashvark from "./hethashvark/Hethashvark";
import Manramasner from "./manramasner/Manramasner";

const Main = () => {
  return (
    <main
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Glxavor />
      <ErbEvVortex />
      <Hethashvark />
      <Manramasner />
      <EsHamadzaynEm />
    </main>
  );
};

export default Main;
