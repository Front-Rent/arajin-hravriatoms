import { useEffect, useRef, useReducer, useCallback } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./Hethashvark.scss";

const ACTIONS = {
  UPDATE_TIMER: "UPDATE_TIMER",
  RESET_TIMER: "RESET_TIMER",
};

const timerReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_TIMER:
      return {
        ...state,
        days: action.payload.days,
        hours: action.payload.hours,
        minutes: action.payload.minutes,
        seconds: action.payload.seconds,
      };
    case ACTIONS.RESET_TIMER:
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    default:
      throw new Error("Unknown action type");
  }
};

const Hethashvark = () => {
  const [state, dispatch] = useReducer(timerReducer, {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const intervalRef = useRef(null);

  const startTimer = useCallback(() => {
    const countdownDate = new Date("2025-03-30T00:00:00").getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(intervalRef.current);
        dispatch({ type: ACTIONS.RESET_TIMER });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dispatch({
          type: ACTIONS.UPDATE_TIMER,
          payload: {
            days: days.toString().padStart(2, "0"),
            hours: hours.toString().padStart(2, "0"),
            minutes: minutes.toString().padStart(2, "0"),
            seconds: seconds.toString().padStart(2, "0"),
          },
        });
      }
    }, 1000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startTimer]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-200px)",
    config: { duration: 600 },
  });

  return (
    <section id="hethasvark" className="hethashvark">
      <div className="hethashvark-header">
        <h2>Հետհաշվարկ</h2>
        <p>Մինչև արարողություն մնացել է․․․</p>
      </div>
      <animated.div className="hethashvark-base" style={props} ref={ref}>
        <div className="hethashvark-base-days base">
          <p>{state.days}</p>
          <span>
            <small>days</small>
          </span>
        </div>
        <div className="hethashvark-base-hours base">
          <p>{state.hours}</p>
          <span>
            <small>hours</small>
          </span>
        </div>
        <div className="hethashvark-base-minutes base">
          <p>{state.minutes}</p>
          <span>
            <small>minutes</small>
          </span>
        </div>
        <div className="hethashvark-base-seconds base">
          <p>{state.seconds}</p>
          <span>
            <small>seconds</small>
          </span>
        </div>
      </animated.div>
      <div className="hethashvark-placeholder">
        <p>Խնդրում ենք էջի ներքևի հատվածում լրացրեք ձեր տվյալները</p>
      </div>
    </section>
  );
};

export default Hethashvark;
