import "./Map.scss";

const Map = ({ src, className, openMap, setOpenMap }) => {
  return (
    <div
      className={`map ${className}`}
      style={
        openMap ? { height: "350px", opacity: 1 } : { height: "0", opacity: 0 }
      }
    >
      <iframe
        className="map-iframe"
        src={src}
        title="Map"
        width="500"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <button className="close-map" onClick={() => setOpenMap(false)}>
        &times;
      </button>
    </div>
  );
};

export default Map;
