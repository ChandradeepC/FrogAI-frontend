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

const UseCasesForm: React.FC<Props> = ({
    motion,
    pq,
    sharp,
    handleInputChange
}) => {
    return (
        <div className="form-container">
            <h2>Primary requirements:</h2>
            <div>
                <label htmlFor="motion">
                    Is motion quality important to you?
                </label>
                <select
                    id="motion"
                    name="motion"
                    value={motion}
                    onChange={handleInputChange}
                >
                    <option value="not">I don't care about motion</option>
                    <option value="imp">
                        Motion quality is very important to me
                    </option>
                    <option value="only">
                        Motion quality is the only thing I care about
                    </option>
                </select>
            </div>
            <div>
                <label htmlFor="pq">Is picture quality important to you?</label>
                <select
                    id="pq"
                    name="pq"
                    value={pq}
                    onChange={handleInputChange}
                >
                    <option value="not">
                        I dont care about picture quality
                    </option>
                    <option value="imp">
                        Picture quality is very important to me
                    </option>
                    <option value="only">
                        Picture quality is the only thing I care about
                    </option>
                </select>
            </div>
            <div>
                <label htmlFor="sharp">
                    Is image and text sharpness important to you?
                </label>
                <select
                    id="sharp"
                    name="sharp"
                    value={sharp}
                    onChange={handleInputChange}
                >
                    <option value="not">I dont care about sharpness</option>
                    <option value="imp">
                        Sharpness is very important to me
                    </option>
                    <option value="only">
                        Sharpness is the only thing I care about
                    </option>
                </select>
            </div>
        </div>
    );
};

export default UseCasesForm;
