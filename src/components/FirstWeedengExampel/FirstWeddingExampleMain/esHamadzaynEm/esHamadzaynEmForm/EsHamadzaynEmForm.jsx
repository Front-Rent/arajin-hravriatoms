import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sendEmail from "../../../../../email";
import PhoneValidation from "../../../../PhoneValidation/PhoneValidation";
import {
  setIsOpen,
  setError,
  setSuccess,
} from "../../../../../store/Slices/formSlice";
import ButtonPickUp from "../../../../ButtonPickUp/ButtonPickUp";
import Loading from "../../../../Loading/Loading";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import astafyan1 from "../../../../../assets/images/WeddingImages/WeddingExampleImages/astafyan1.jpg";
import astafyan2 from "../../../../../assets/images/WeddingImages/WeddingExampleImages/astafyan2jpg.jpg";
import astafyan3 from "../../../../../assets/images/WeddingImages/WeddingExampleImages/astafyan3.jpg";
import astafyan4 from "../../../../../assets/images/WeddingImages/WeddingExampleImages/astafyan4.jpg";

import "./EsHamadzaynEmForm.scss";

const images = [astafyan1, astafyan2, astafyan3, astafyan4];

const imageVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const EsHamadzaynEmForm = ({ handleHidden, setShowGallery }) => {
  const { index } = useSelector((state) => state.esHamadzaynEm);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.form);
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const toggleFormVisibility = () => {
    dispatch(setIsOpen(!isOpen));
    setShowGallery(!isOpen);
    setButtonVisible(isOpen); // Toggle visibility of the button
  };

  const isValidPhoneNumber = (number) => {
    return number.startsWith("+374") && number.length > 4;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const phoneNumber = formData.get("phoneNumber");
    const guests = formData.get("guests");

    if (!username || !phoneNumber || !guests) {
      dispatch(setError("Խնդրում ենք լրացնել բոլոր դաշտերը։"));
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      dispatch(
        setError(
          "Հեռախոսահամարի սխալ ձևաչափ։ Խնդրում ենք մուտքագրել հեռախոսահամարը +374 ձևաչափով։"
        )
      );
      return;
    }

    setLoading(true);

    try {
      await sendEmail(username, phoneNumber, guests);
      dispatch(setSuccess("Ֆորման հաջողությամբ ուղարկվեց։"));
      e.target.reset();
      handleHidden();
      dispatch(setError(""));
    } catch (error) {
      dispatch(
        setError(
          "Սխալ առաջացավ ֆորման ուղարկելու ընթացքում։ Խնդրում ենք փորձեք կրկին։"
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="es-hamazayn-em-form">
      <div className="button-div">
        {buttonVisible && (
          <button onClick={toggleFormVisibility} className="show-form-button">
            Համաձայնվել
          </button>
        )}
      </div>

      {isOpen && (
        <>
          <form className="paper-content show" onSubmit={onSubmit}>
            <button
              type="button"
              className="close-button"
              onClick={toggleFormVisibility}
            >
              ✕
            </button>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Անուն"
              className="input-field"
              required
            />
            <br />
            <input
              type="number"
              id="guests"
              name="guests"
              className="input-field-guests"
              placeholder="Հյուրերի քանակը"
              required
            />
            <PhoneValidation name="phoneNumber" />

            <ButtonPickUp textContent="Ուղարկել" left="33%" />

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
                  <img
                    src={images[index]}
                    alt="img"
                    className="gallery-image"
                  />
                </Link>
              </motion.div>
            </div>
          </form>

          {loading && <Loading />}
        </>
      )}
    </div>
  );
};

export default EsHamadzaynEmForm;
