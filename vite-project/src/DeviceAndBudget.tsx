import React, { useState } from "react";
import "./Component.css"

interface Props {}

const DeviceAndBudgetForm: React.FC<Props> = () => {
  const [pcGpu, setPcGpu] = useState<string>("no");
  const [mac, setMac] = useState<string>("no");
  const [console, setConsole] = useState<string>("no");
  const [budget, setBudget] = useState<number>(0);

  let gpus: string[] = 
  [
    "4090",
    "4080",
    "7900xtx",
    "7900xt",
    "3090ti",
    "6950xt",
    "4070ti",
    "6900xt",
    "3090",
    "3080ti",
    "3080_12gb",
    "6800xt",
    "3080_10gb",
    "6800",
    "3070ti",
    "6750xt",
    "3070",
    "6700xt",
    "2080ti",
    "series_x",
    "ps5",
    "3060ti",
    "2080super",
    "6700",
    "2080",
    "A770_16gb",
    "6650xt",
    "2070super",
    "A770_8gb",
    "6600xt",
    "5700xt",
    "3060",
    "VII",
    "2070",
    "6600",
    "A750",
    "1080ti",
    "2060super",
    "5700",
    "5600xt",
    "Vega64",
    "2060",
    "1080",
    "3050",
    "1070ti",
    "Vega56",
    "1660super",
    "1660ti",
    "1070",
    "1660",
    "series_s",
    "5500xt_8gb",
    "590",
    "980ti",
    "580_8gb",
    "1650super",
    "5500xt",
    "1060_6gb",
    "6500xt",
    "980",
    "1650",
    "A380",
    "570_4gb",
    "1060_3gb",
    "1650",
    "970",
    "6400",
    "780",
    "1050ti",
    "1630",
    "1050",
    "560",
    "550",
    "1030",
]

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "pc-gpu":
        setPcGpu(value);
        break;
      case "mac":
        setMac(value);
        break;
      case "console":
        setConsole(value);
        break;
      case "budget":
        setBudget(parseInt(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="form-container">
      <div>
        <label htmlFor="pc-gpu">GPU:</label>
        <select id="pc-gpu" name="pc-gpu" value={pcGpu} onChange={handleInputChange}>
        <option value="">Select GPU</option>
        {gpus.map((gpu) => (
        <option key={gpu} value={gpu}>
            {gpu}
        </option>
        ))}
        </select>
      </div>
      <div>
        <label htmlFor="mac">Mac:</label>
        <select id="mac" name="mac" value={mac} onChange={handleInputChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div>
        <label htmlFor="console">Console:</label>
        <select
          id="console"
          name="console"
          value={console}
          onChange={handleInputChange}
        >
          <option value="no">No</option>
          <option value="xbox-series-s">Xbox Series S</option>
          <option value="xbox-series-x">Xbox Series X</option>
          <option value="ps5">PS5</option>
        </select>
      </div>
      <div>
        <label htmlFor="budget">Budget:</label>
        <input
          type="number"
          id="budget"
          name="budget"
          value={budget}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default DeviceAndBudgetForm;
