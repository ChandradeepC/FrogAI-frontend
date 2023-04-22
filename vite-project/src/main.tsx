import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import DeviceAndBudgetForm from './DeviceAndBudget';
import UseCasesForm from './UseCases';
import SpecialForm from './Special';
import OptionalFilterForm from './OptionalFilters';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="forms-container">
      <DeviceAndBudgetForm />
      <UseCasesForm />
      <SpecialForm />
      <OptionalFilterForm />
    </div>
  </React.StrictMode>,
);