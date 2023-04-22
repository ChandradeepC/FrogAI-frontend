import { useState } from 'react';
import reactLogo from './assets/react.svg';
import frogaiLogo from './assets/frogai.jpg';
import './App.css';
import DeviceAndBudgetForm from './DeviceAndBudget';
import UseCasesForm from './UseCases';
import SpecialForm from './Special';
import OptionalFilterForm from './OptionalFilters';
import RecommendationForm from './Recommendations';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="wrapper">
            <div className="header-container">
                <img
                    src={frogaiLogo}
                    alt="FrogAI Logo"
                    className="frogai-logo"
                />
                <h1 className="header">FrogAI</h1>
            </div>
            <div className="forms-container">
                <div className="left-column">
                    <DeviceAndBudgetForm />
                    <UseCasesForm />
                    <SpecialForm />
                    <OptionalFilterForm />
                </div>
                <div className="right-column">
                    <RecommendationForm />
                </div>
            </div>
        </div>
    );
}

export default App;
