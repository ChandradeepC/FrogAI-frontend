import React, { HTMLInputTypeAttribute, useState } from 'react';
import './Component.css';

interface Props {
    print: string;
    edit: string;
    grade: string;
    handleInputChange: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
}

const SpecialForm: React.FC<Props> = ({
    print,
    edit,
    grade,
    handleInputChange
}) => {
    return (
        <div className="form-container">
            <h2> Special use cases: </h2>
            <div>
                <label htmlFor="print">
                    Will you use the monitor for print photo editing?
                </label>
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
                <label htmlFor="edit">
                    Will you use the monitor for digital photo editing or SDR
                    video editing?
                </label>
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
                <label htmlFor="grade">
                    Will you use the monitor for SDR/HDR color grading or HDR
                    video editing?
                </label>
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
