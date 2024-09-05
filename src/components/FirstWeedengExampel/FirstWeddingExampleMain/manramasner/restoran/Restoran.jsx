import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

import restoran from "../../../../../assets/images/WeddingImages/WeddingExampleImages/restoran.png";
import Map from "../../../../Map/Map";

import "./Restoran.scss";

const Restoran = ({ openMap, setOpenMap, setIsMapOpen, isMapOpen, mapId }) => {
  function handleOpenMap() {
    if (!isMapOpen) {
      setIsMapOpen(true); // Блокируем повторное открытие карты
      setOpenMap(mapId);
      setTimeout(() => {
        setIsMapOpen(false); // Разблокируем через 2 секунды
      }, 2000);
    }
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(200px)",
    config: { duration: 1200 },
  });

  return (
    <animated.section className="restoran" ref={ref} style={props}>
      <div className="restoran-img">
        <img src={restoran} alt="Restoran" />
      </div>
      <div className="restoran-txt">
        <h3>Հանդիսություն</h3>
        <p>
          <span>Շաբաթ, 28, 2025թ</span> <br /> <span>16:00-22:00</span>
        </p>
        <p>Ջրվեժ 2-րդ թաղամաս 6/10</p>
        <p> +374 94 778199</p>

        <div className="loader" onClick={handleOpenMap}></div>
        <Map
          openMap={openMap === mapId}
          setOpenMap={setOpenMap}
          className="restoran-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5795.203556882633!2d44.494670321322765!3d40.17711294382576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc55928a4281%3A0x66c99859b58a2740!2z1Y3VuNaC1oDVoiDVjdWh1oDVo9Wr1b0g1LHVvNWh1bvVttW41oDVpNWh1bbVq9W91b8g1aXVr9Wl1bLVpdaB1as!5e1!3m2!1shy!2sam!4v1725525302695!5m2!1shy!2sam"
        />
      </div>
    </animated.section>
  );
};

export default Restoran;
