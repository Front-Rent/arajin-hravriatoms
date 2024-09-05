import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

import ekexeci from "../../../../../assets/images/WeddingImages/WeddingExampleImages/ekexeci.png";
import Map from "../../../../Map/Map";

import "./Ekexeci.scss";

const Ekexeci = ({ openMap, setOpenMap, setIsMapOpen, isMapOpen, mapId }) => {
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
    transform: inView ? "translateX(0)" : "translateX(-200px)",
    config: { duration: 1200 },
  });

  return (
    <animated.section className="ekexeci" ref={ref} style={props}>
      <div className="ekexeci-img">
        <img src={ekexeci} alt="Սուրբ Սարքիս Եկեղեցի" />
      </div>
      <div className="ekexeci-txt">
        <h3>Արարողություն</h3>
        <p>
          <span>Շաբաթ, 28, 2019թ</span> <br /> <span>14:00-16:00</span>
        </p>
        <p>21 Իսրայելյան փողոց, Երևան 0015</p>
        <p> +374 94 778199</p>

        <div className="loader" onClick={handleOpenMap}></div>
        <Map
          openMap={openMap === mapId}
          setOpenMap={setOpenMap}
          className="ekexeci-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.1661176259563!2d44.59875957581526!3d40.18731407147738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa4a0e909bd89%3A0x82b95444dba6e79c!2sAstafyan%20Hall!5e1!3m2!1shy!2sam!4v1725524220504!5m2!1shy!2sam"
        />
      </div>
    </animated.section>
  );
};

export default Ekexeci;
