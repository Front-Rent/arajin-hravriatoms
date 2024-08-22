import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

import ekexeci from "../../../../../assets/images/WeddingImages/WeddingExampleImages/ekexeci.png";

import "./Ekexeci.scss";

const Ekexeci = () => {
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

        <Link to="/wedding/example1">
          <div className="loader"></div>
        </Link>
      </div>
    </animated.section>
  );
};

export default Ekexeci;
