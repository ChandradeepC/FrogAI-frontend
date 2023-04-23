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
            <div>
                <label htmlFor="motion">Motion:</label>
                <select
                    id="motion"
                    name="motion"
                    value={motion}
                    onChange={handleInputChange}
                >
                    <option value="not">Not important at all</option>
                    <option value="imp">Important</option>
                    <option value="only">The only thing I do</option>
                </select>
            </div>
            <div>
                <label htmlFor="pq">PQ:</label>
                <select
                    id="pq"
                    name="pq"
                    value={pq}
                    onChange={handleInputChange}
                >
                    <option value="not">Not important at all</option>
                    <option value="imp">Important</option>
                    <option value="only">The only thing I do</option>
                </select>
            </div>
            <div>
                <label htmlFor="sharp">Sharp:</label>
                <select
                    id="sharp"
                    name="sharp"
                    value={sharp}
                    onChange={handleInputChange}
                >
                    <option value="not">Not important at all</option>
                    <option value="imp">Important</option>
                    <option value="only">The only thing I do</option>
                </select>
            </div>
        </div>
    );
};

export default UseCasesForm;
