import React from "react";
// import { Icon } from "@iconify-icon/react";
// import { locationIcon } from "@iconify-icon/react";
import { SketchOutlined } from "@ant-design/icons";

const LocationPin = ({ text }) => {
  return (
    <div className="pin">
      {/* Adding icon to the map body */}
      <SketchOutlined style={{ color: "red" }} className="pin-icon" />
      {/* Displaying the text of our location in the map body */}
      <p className="pin-text">{text}</p>
    </div>
  );
};

export default LocationPin;
