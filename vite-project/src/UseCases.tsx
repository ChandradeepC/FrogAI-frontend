import React, { useState } from 'react';
import './Component.css';
import AdvancedForm from './Advanced';

interface Props {
    casual: string;
    comp: string;
    text: string;
    media: string;
    handleInputChange: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
}

const UseCasesForm: React.FC<Props> = ({
    casual,
    comp,
    text,
    media,
    handleInputChange
}) => {
    return <div></div>;
};

export default UseCasesForm;
