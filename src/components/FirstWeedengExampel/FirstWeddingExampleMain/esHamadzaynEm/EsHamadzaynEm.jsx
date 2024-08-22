// EsHamadzaynEm.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EsHamadzaynEmForm from "./esHamadzaynEmForm/EsHamadzaynEmForm";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  closeForm,
  setError,
  setSuccess,
  setShowGallery,
  incrementIndex,
} from "../../../../store/Slices/EsHamadzaynEmSlice";

import astafyan1 from "../../../../assets/images/WeddingImages/WeddingExampleImages/astafyan1.jpg";
import astafyan2 from "../../../../assets/images/WeddingImages/WeddingExampleImages/astafyan2jpg.jpg";
import astafyan3 from "../../../../assets/images/WeddingImages/WeddingExampleImages/astafyan3.jpg";
import astafyan4 from "../../../../assets/images/WeddingImages/WeddingExampleImages/astafyan4.jpg";

import "./EsHamadzaynEm.scss";

const images = [astafyan1, astafyan2, astafyan3, astafyan4];

const imageVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const EsHamadzaynEm = () => {
  const dispatch = useDispatch();
  const { isOpen, error, success, index, showGallery } = useSelector(
    (state) => state.esHamadzaynEm
  );

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(incrementIndex());
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleHidden = () => {
    dispatch(closeForm());
  };

  useEffect(() => {
    dispatch(setError(null));
    dispatch(setSuccess(null));
  }, [dispatch]);

  return (
    <section className="es-hamadzayn-em" id="esHamadzaynEm">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="shape-fill"
          fill="#FFEEF1"
        ></path>
      </svg>
      {isOpen ? (
        <div className="patvirel-form">
          <div className="envelope">
            <EsHamadzaynEmForm
              handleHidden={handleHidden}
              setError={(err) => dispatch(setError(err))}
              setSuccess={(msg) => dispatch(setSuccess(msg))}
              showGallery={showGallery}
              setShowGallery={(val) => dispatch(setShowGallery(val))}
            />
          </div>
        </div>
      ) : (
        <p>Ձեր տվյալները արդեն ուղարկվել են, շնորհակալություն:</p>
      )}

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      {showGallery && (
        <div className="gallery">
          <motion.div
            className="image-container"
            key={index}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
          >
            <Link to="https://www.instagram.com/astafyan_hallrestaurant/">
              <img src={images[index]} alt="img" className="gallery-image" />
            </Link>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default EsHamadzaynEm;
