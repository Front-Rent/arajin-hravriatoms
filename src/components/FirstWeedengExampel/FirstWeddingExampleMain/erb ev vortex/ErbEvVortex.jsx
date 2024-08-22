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

  const svg = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "opacity(0)" : "opacity(1)",
    config: { duration: 600 },
  });

  return (
    <>
      <animated.svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="svg"
        style={svg}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="shape-fill"
        ></path>
      </animated.svg>
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
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="svg-second"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill-second"
          ></path>
        </svg>
      </animated.section>
    </>
  );
};

export default ErbEvVortex;
