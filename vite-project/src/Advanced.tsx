import React, { useState } from 'react';
import './Component.css';

interface Props {
    motion: string;
    pq: string;
    sharp: string;
    handleInputChange: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
}

const AdvancedForm: React.FC<Props> = ({
    motion,
    pq,
    sharp,
    handleInputChange
}) => {
    return (
        <div className="form-container">
            <h2>Primary requirements</h2>
            <div className="field">
                <label htmlFor="motion">Motion:</label>
                <select
                    id="motion"
                    name="motion"
                    value={motion}
                    onChange={handleInputChange}
                    disabled={pq === 'only' || sharp === 'only'}
                >
                    <option value="not">Don't care</option>
                    <option value="imp">Important</option>
                    <option value="only">Only thing I care about</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="pq">Picture quality:</label>
                <select
                    id="pq"
                    name="pq"
                    value={pq}
                    onChange={handleInputChange}
                    disabled={motion === 'only' || sharp === 'only'}
                >
                    <option value="not">Don't care</option>
                    <option value="imp">Important</option>
                    <option value="only">Only thing I care about</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="sharp">Sharpness:</label>
                <select
                    id="sharp"
                    name="sharp"
                    value={sharp}
                    onChange={handleInputChange}
                    disabled={motion === 'only' || pq === 'only'}
                >
                    <option value="not">Don't care</option>
                    <option value="imp">Important</option>
                    <option value="only">Only thing I care about</option>
                </select>
            </div>
        </div>
    );
};

export default AdvancedForm;
