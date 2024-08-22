import "./ButtonPickUp.scss";

const ButtonPickUp = ({ top, left, textContent }) => {
  return (
    <button className="pick-up-button" style={{ top: top, left: left }}>
      <span>{textContent}</span>
    </button>
  );
};

export default ButtonPickUp;
