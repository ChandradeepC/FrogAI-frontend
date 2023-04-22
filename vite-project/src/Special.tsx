import React, { useState } from 'react';
import './Component.css';

interface Props {}

const SpecialForm: React.FC<Props> = () => {
    const [print, setPrint] = useState<string>('no');
    const [edit, setEdit] = useState<string>('no');
    const [grade, setGrade] = useState<string>('no');

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        switch (name) {
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
        <div className="form-container">
            <div>
                <label htmlFor="print">Print:</label>
                <select
                    id="print"
                    name="print"
                    value={print}
                    onChange={handleInputChange}
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
            <div>
                <label htmlFor="edit">Edit:</label>
                <select
                    id="edit"
                    name="edit"
                    value={edit}
                    onChange={handleInputChange}
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
            <div>
                <label htmlFor="grade">Grade:</label>
                <select
                    id="grade"
                    name="grade"
                    value={grade}
                    onChange={handleInputChange}
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
        </div>
    );
};

export default SpecialForm;
