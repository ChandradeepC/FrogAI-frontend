import React, { HTMLInputTypeAttribute, useState } from 'react';
import './Component.css';

interface Props {
    print: string;
    edit: string;
    grade: string;
    console: string;
    mac: string;
    pcGpu: string;
    handleInputChange: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
}

const SpecialForm: React.FC<Props> = ({
    print,
    edit,
    grade,
    console,
    mac,
    pcGpu,
    handleInputChange
}) => {
    return (
        <div className="form-container">
            <h2> Special uses</h2>
            {console !== 'no' &&
                console !== '' &&
                mac === 'no' &&
                pcGpu === '' && (
                    <div className="warning">
                        You cannot use a console for professional work. Select a
                        mac or pc if you want to do professional work.
                    </div>
                )}
            <div className="field">
                <label htmlFor="print">Print photo editing:</label>
                <select
                    id="print"
                    name="print"
                    value={print}
                    onChange={handleInputChange}
                    // disabled={console !== 'no' && console !== ''}
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="edit">
                    Digital photo editing or SDR video editing:
                </label>
                <select
                    id="edit"
                    name="edit"
                    value={edit}
                    onChange={handleInputChange}
                    // disabled={console !== 'no' && console !== ''}
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="grade">
                    HDR video editing or color grading:
                </label>
                <select
                    id="grade"
                    name="grade"
                    value={grade}
                    onChange={handleInputChange}
                    // disabled={console !== 'no' && console !== ''}
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
        </div>
    );
};

export default SpecialForm;
