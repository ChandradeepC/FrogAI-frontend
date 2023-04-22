import React, { useState } from "react";
import "./Component.css";

interface Props {}

const OptionalFilterForm: React.FC<Props> = () => {
  const [aspect, setAspect] = useState<string>("nopref");
  const [curve, setCurve] = useState<string>("nopref");
  const [size, setSize] = useState<string>("nopref");
  const [res, setRes] = useState<string>("nopref");
  const [minRR, setMinRR] = useState<string>("nopref");
  const [panel, setPanel] = useState<string>("nopref");
  const [backlight, setBacklight] = useState<string>("nopref");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "aspect":
        setAspect(value);
        break;
      case "curve":
        setCurve(value);
        break;
      case "size":
        setSize(value);
        break;
      case "res":
        setRes(value);
        break;
      case "minRR":
        setMinRR(value);
        break;
      case "panel":
        setPanel(value);
        break;
      case "backlight":
        setBacklight(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="form-container">
      <div>
        <label htmlFor="aspect">Aspect:</label>
        <select
          id="aspect"
          name="aspect"
          value={aspect}
          onChange={handleInputChange}
        >
          <option value="nopref">No preference</option>
          <option value="wide">Wide</option>
          <option value="ultrawide">Ultra Wide</option>
          <option value="superultrawide">Super Ultra Wide</option>
        </select>
      </div>
      <div>
        <label htmlFor="curve">Curve:</label>
        <select
          id="curve"
          name="curve"
          value={curve}
          onChange={handleInputChange}
        >
          <option value="nopref">No preference</option>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div>
        <label htmlFor="size">Size:</label>
        <select id="size" name="size" value={size} onChange={handleInputChange}>
          <option value="nopref">No Preference</option>
          <option value="24">24"</option>
          <option value="25">25"</option>
          <option value="27">27"</option>
          <option value="32">32"</option>
          <option value="34">34"</option>
          <option value="38">38"</option>
          <option value="49">49"</option>
        </select>
      </div>
      {size === "49" && (
        <div>
          <label htmlFor="res">Resolution:</label>
          <select id="res" name="res" value={res} onChange={handleInputChange}>
            <option value="nopref">No preference</option>
            <option value="5120x1440">5120x1440</option>
            <option value="3840x1080">3840x1080</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="minRR">Minimum Refresh Rate:</label>
        <select
          id="minRR"
          name="minRR"
          value={minRR}
          onChange={handleInputChange}
        >
          <option value="nopref">No preference</option>
          <option value="60hz">60Hz</option>
          <option value="75hz">75Hz</option>
          <option value="120hz">120Hz</option>
          <option value="144hz">144Hz</option>
          <option value="240hz">240Hz</option>
        </select>
      </div>
      <div>
        <label htmlFor="panel">Panel Type:</label>
        <select
          id="panel"
          name="panel"
          value={panel}
          onChange={handleInputChange}
        >
          <option value="nopref">No preference</option>
          <option value="ips">IPS</option>
          <option value="tn">TN</option>
          <option value="va">VA</option>
          <option value="va">OLED</option>
        </select>
      </div>
      <div>
        <label htmlFor="backlight">Backlight Type:</label>
        <select
          id="backlight"
          name="backlight"
          value={backlight}
          onChange={handleInputChange}
        >
          <option value="nopref">No preference</option>
          <option value="oled">MiniLED</option>
        </select>
      </div>
    </div>
  );
};

export default OptionalFilterForm;
