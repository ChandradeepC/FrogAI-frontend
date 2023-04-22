import React, { useState } from "react";
import "./Component.css"

interface Props {}

const DeviceAndBudgetForm: React.FC<Props> = () => {
  const [pcGpu, setPcGpu] = useState<string>("no");
  const [mac, setMac] = useState<string>("no");
  const [console, setConsole] = useState<string>("no");
  const [budget, setBudget] = useState<number>(0);

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
        <input
          type="text"
          id="pc-gpu"
          name="pc-gpu"
          value={pcGpu}
          onChange={handleInputChange}
        />
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
