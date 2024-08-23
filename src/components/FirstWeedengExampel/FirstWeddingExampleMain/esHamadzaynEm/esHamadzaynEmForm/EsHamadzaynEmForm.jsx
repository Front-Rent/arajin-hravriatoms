import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PhoneValidation from "../../../../PhoneValidation/PhoneValidation";
import {
  setIsOpen,
  setError,
  setSuccess,
} from "../../../../../store/Slices/formSlice";
import ButtonPickUp from "../../../../ButtonPickUp/ButtonPickUp";
import Loading from "../../../../Loading/Loading";
import "./EsHamadzaynEmForm.scss";

const EsHamadzaynEmForm = ({ handleHidden, setShowGallery }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.form);
  const [loading, setLoading] = useState(false);

  const toggleFormVisibility = () => {
    dispatch(setIsOpen(!isOpen));
    setShowGallery(true);
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
      const response = await axios.post(
        "https://porcnakanserverhraviratoms.netlify.app/.netlify/functions/server/submit-form",
        {
          username,
          phoneNumber,
          guests,
        }
      );

      if (response.status === 200) {
        dispatch(setSuccess("Ֆորման հաջողությամբ ուղարկվեց։"));
        e.target.reset();
        handleHidden();
        dispatch(setError(""));
      } else {
        dispatch(setError(response.data || "Փորձեք կրկին։"));
      }
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
    <>
      <div className="button-div">
        <button onClick={toggleFormVisibility} className="show-form-button">
          Համաձայնվել
        </button>
      </div>

      {isOpen && (
        <>
          <div className="modal-overlay show" onClick={toggleFormVisibility} />
          <form className="paper-content show" onSubmit={onSubmit}>
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
            <ButtonPickUp textContent="Ուղարկել" left="130px" />
          </form>
          {loading && <Loading />}
        </>
      )}
    </>
  );
};

export default EsHamadzaynEmForm;
