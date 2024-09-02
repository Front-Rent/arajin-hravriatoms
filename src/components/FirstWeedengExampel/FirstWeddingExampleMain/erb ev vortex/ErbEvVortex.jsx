import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./ErbEvVortex.scss";

const ErbEvVortex = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(200px)",
    config: { duration: 600 },
  });

  return (
    <>
      <animated.section
        id="erbEvVortex"
        className="erb-ev-vortex"
        style={props}
        ref={ref}
      >
        <h2>Երբ և Որտեղ</h2>
        <p>Խնդրում եմ այդ օրը ոչ մի բան չպլանավորել</p>
        <div className="erb-ev-vortex-or">
          <span className="amis">Մարտ</span>
          <div className="between-box">
            <span className="shabatva-or">Շաբաթ</span>
            <span className="or">30</span>
            <span className="tari">2025</span>
          </div>
          <span className="jam">16։00</span>
        </div>
        <div className="erb-ev-vortex-restoran">
          <h2>ASTAFYAN HALL RESTAURANT</h2>
          <h2>Ջրվեժ , 2-րդ թաղամաս 6/10</h2>
        </div>
      </animated.section>
    </>
  );
};

export default ErbEvVortex;
