import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./PhoneValidation.scss";

const PhoneValidation = ({ name, value, onChange }) => {
  return (
    <div className="valid-phone">
      <div className="phone-input-wrapper">
        <PhoneInput
          country={"am"}
          defaultCountry="am"
          value={value}
          onChange={onChange}
          inputProps={{
            name: name,
            required: true,
            placeholder: "00 00-00",
          }}
          international
        />
      </div>
    </div>
  );
};

export default PhoneValidation;
