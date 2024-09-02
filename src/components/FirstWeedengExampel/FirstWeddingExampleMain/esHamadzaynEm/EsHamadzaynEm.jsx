// EsHamadzaynEm.js
import React, { useEffect } from "react";
import EsHamadzaynEmForm from "./esHamadzaynEmForm/EsHamadzaynEmForm";
import { useSelector, useDispatch } from "react-redux";
import {
  closeForm,
  setError,
  setSuccess,
  setShowGallery,
  incrementIndex,
} from "../../../../store/Slices/EsHamadzaynEmSlice";

import "./EsHamadzaynEm.scss";

const EsHamadzaynEm = () => {
  const dispatch = useDispatch();
  const { isOpen, error, success, showGallery } = useSelector(
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
    </section>
  );
};

export default EsHamadzaynEm;
