import Ekexeci from "./ekexeci/Ekexeci";
import Restoran from "./restoran/Restoran";

import "./Manramasner.scss";

const Manramasner = () => {
  return (
    <section id="manramasner" className="manramasner">
      <h2>Մանրամասներ</h2>
      <div className="manramasner-detals">
        <Ekexeci />
        <Restoran />
      </div>
    </section>
  );
};

export default Manramasner;
