import { useState, useEffect } from "react";

import image1 from "../../../../assets/images/WeddingImages/WeddingExampleImages/images.png";
import image2 from "../../../../assets/images/WeddingImages/WeddingExampleImages/images2.png";
import image3 from "../../../../assets/images/WeddingImages/WeddingExampleImages/images3.png";
import image4 from "../../../../assets/images/WeddingImages/WeddingExampleImages/images4.png";

import simvol from "../../../../assets/images/WeddingImages/WeddingExampleImages/ornament.png";

import "./Glxavor.scss";

const Glxavor = () => {
  const images = [image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeOut(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section
      className={`glxavor ${fadeOut ? "fade-out" : "fade-in"}`}
      style={{
        "--background-image": `url(${images[currentIndex]})`,
      }}
    >
      <div className="glxavor-content">
        <span>հարսանիքի հրավեր</span>
        <h1>Մարի & Սամվել</h1>

        <img src={simvol} alt="img" />
        <p>Հրավիրում ենք ձեզ կիսելու այս հրաշալի օրը մեզ հետ</p>
      </div>
    </section>
  );
};

export default Glxavor;
