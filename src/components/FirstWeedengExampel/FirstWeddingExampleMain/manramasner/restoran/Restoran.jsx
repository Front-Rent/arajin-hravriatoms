import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

import restoran from "../../../../../assets/images/WeddingImages/WeddingExampleImages/restoran.png";

import "./Restoran.scss";

const Restoran = () => {
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
        <img src={restoran} alt="Սուրբ Սարքիս Եկեղեցի" />
      </div>
      <div className="restoran-txt">
        <h3>Հանդիսություն</h3>
        <p>
          <span>Շաբաթ, 28, 2025թ</span> <br /> <span>16:00-22:00</span>
        </p>
        <p>Ջրվեժ 2-րդ թաղամաս 6/10</p>
        <p> +374 94 778199</p>

        <Link to="/wedding/example1">
          <div className="loader"></div>
        </Link>
      </div>
    </animated.section>
  );
};

export default Restoran;
