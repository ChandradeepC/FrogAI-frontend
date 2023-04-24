import { useState } from 'react';
import reactLogo from './assets/react.svg';
import frogaiLogo from './assets/frogai.jpg';
import './App.css';
import DeviceAndBudgetForm from './DeviceAndBudget';
import UseCasesForm from './UseCases';
import SpecialForm from './Special';
import OptionalFilterForm from './OptionalFilters';
import RecommendationForm from './Recommendations';

const App = () => {
    const [pcGpu, setPcGpu] = useState<string>('no');
    const [mac, setMac] = useState<string>('no');
    const [console, setConsole] = useState<string>('no');
    const [budget, setBudget] = useState<number>(0);
    const [motion, setMotion] = useState<string>('not');
    const [pq, setPq] = useState<string>('not');
    const [sharp, setSharp] = useState<string>('not');
    const [print, setPrint] = useState<string>('no');
    const [edit, setEdit] = useState<string>('no');
    const [grade, setGrade] = useState<string>('no');
    const [aspect, setAspect] = useState<string>('nopref');
    const [curve, setCurve] = useState<string>('nopref');
    const [size, setSize] = useState<string>('nopref');
    const [res, setRes] = useState<string>('nopref');
    const [minRR, setMinRR] = useState<string>('nopref');
    const [panel, setPanel] = useState<string>('nopref');
    const [backlight, setBacklight] = useState<string>('nopref');

    const handleInputChange = (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        switch (name) {
            case 'pc-gpu':
                setPcGpu(value);
                break;
            case 'mac':
                setMac(value);
                break;
            case 'console':
                setConsole(value);
                break;
            case 'budget':
                setBudget(parseInt(value));
                break;
            case 'motion':
                setMotion(value);
                break;
            case 'pq':
                setPq(value);
                break;
            case 'sharp':
                setSharp(value);
                break;
            case 'aspect':
                setAspect(value);
                break;
            case 'curve':
                setCurve(value);
                break;
            case 'size':
                setSize(value);
                break;
            case 'res':
                setRes(value);
                break;
            case 'minRR':
                setMinRR(value);
                break;
            case 'panel':
                setPanel(value);
                break;
            case 'backlight':
                setBacklight(value);
                break;
            case 'print':
                setPrint(value);
                break;
            case 'edit':
                setEdit(value);
                break;
            case 'grade':
                setGrade(value);
                break;
            default:
                break;
        }
    };

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
                    <h2>Form:</h2>
                    <DeviceAndBudgetForm
                        pcGpu={pcGpu}
                        mac={mac}
                        console={console}
                        budget={budget}
                        handleInputChange={handleInputChange}
                    />
                    <UseCasesForm
                        motion={motion}
                        pq={pq}
                        sharp={sharp}
                        handleInputChange={handleInputChange}
                    />
                    <SpecialForm
                        print={print}
                        edit={edit}
                        grade={grade}
                        handleInputChange={handleInputChange}
                    />
                    <OptionalFilterForm
                        aspect={aspect}
                        curve={curve}
                        size={size}
                        res={res}
                        minRR={minRR}
                        panel={panel}
                        backlight={backlight}
                        handleInputChange={handleInputChange}
                    />
                </div>
                <div className="right-column">
                    <RecommendationForm
                        pcGpu={pcGpu}
                        mac={mac}
                        consoles={console}
                        budget={budget}
                        motion={motion}
                        pq={pq}
                        sharp={sharp}
                        print={print}
                        edit={edit}
                        grade={grade}
                        aspect={aspect}
                        curve={curve}
                        size={size}
                        res={res}
                        minRR={minRR}
                        panel={panel}
                        backlight={backlight}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
