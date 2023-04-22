import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DeviceAndBudgetForm from "./DeviceAndBudget";
import UseCasesForm from "./UseCases";
import SpecialForm from "./Special";
import OptionalFilterForm from "./OptionalFilters";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="forms-container">
      <DeviceAndBudgetForm />
      <UseCasesForm />
      <SpecialForm />
      <OptionalFilterForm />
    </div>
  );
}

export default App;
