import React, { useState } from 'react';
import './Component.css';

interface Props {
    aspect: string;
    curve: string;
    size: string;
    res: string;
    minRR: string;
    panel: string;
    backlight: string;
    hdr: string;
    handleInputChange: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
}

const OptionalFilterForm: React.FC<Props> = ({
    aspect,
    curve,
    size,
    res,
    minRR,
    panel,
    backlight,
    hdr,
    handleInputChange
}) => {
    return (
        <div className="form-container">
            <h2>Optional filters</h2>
            <div className="field">
                <label htmlFor="aspect">Aspect ratio: </label>
                <select
                    id="aspect"
                    name="aspect"
                    value={aspect}
                    onChange={handleInputChange}
                >
                    <option value="nopref">No preference</option>
                    <option value="wide">Wide</option>
                    <option value="ultrawide">Ultrawide</option>
                    <option value="superultrawide">Super Ultrawide</option>
                    <option value="tall">Tall</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="curve">Curve: </label>
                <select
                    id="curve"
                    name="curve"
                    value={curve}
                    onChange={handleInputChange}
                >
                    <option value="nopref">No preference</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="size">Size: </label>
                <select
                    id="size"
                    name="size"
                    value={size}
                    onChange={handleInputChange}
                >
                    <option value="nopref">No Preference</option>
                    <option value="24">24"</option>
                    <option value="25">25"</option>
                    <option value="27">27"</option>
                    <option value="32">32"</option>
                    <option value="34">34"</option>
                    <option value="38">38"</option>
                    <option value="49">49"</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="res">Resolution: </label>
                <select
                    id="res"
                    name="res"
                    value={res}
                    onChange={handleInputChange}
                >
                    <option value="nopref">No preference</option>
                    <option value="5120x1440p">5120x1440p (UWDQHD)</option>
                    <option value="2560x1440p">2560x1440p (WQHD)</option>
                    <option value="2560x1080p">2560x1080p (UWFHD)</option>
                    <option value="1920x1080p">1920x1080p (FHD)</option>
                    <option value="3440x1440p">3440x1440p (UWQHD)</option>
                    <option value="2560x1080p">2560x1080p</option>
                    <option value="3840x2160p">3840x2160p (UHD 4K)</option>
                    <option value="1920x1200p">1920x1200p</option>
                    <option value="3840x1600p">3840x1600p</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="minRR">Minimum refresh rate: </label>
                <select
                    id="minRR"
                    name="minRR"
                    value={minRR}
                    onChange={handleInputChange}
                >
                    <option value="nopref">No preference</option>
                    <option value="60hz">60hz</option>
                    <option value="75hz">75hz</option>
                    <option value="120hz">120hz</option>
                    <option value="144hz">144hz</option>
                    <option value="240hz">240hz</option>
                    <option value="360hz">360hz</option>
                    <option value="500hz">500hz</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="panel">Panel type: </label>
                <select
                    id="panel"
                    name="panel"
                    value={panel}
                    onChange={handleInputChange}
                >
                    <option value="nopref">No preference</option>
                    <option value="IPS">IPS</option>
                    <option value="TN">TN</option>
                    <option value="VA">VA</option>
                    <option value="OLED">OLED</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="backlight">Backlight type: </label>
                <select
                    id="backlight"
                    name="backlight"
                    value={backlight}
                    onChange={handleInputChange}
                >
                    <option value="nopref">No preference</option>
                    <option value="miniLED">MiniLED</option>
                    <option value="FALD">FALD</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="hdr">HDR: </label>
                <select
                    id="hdr"
                    name="hdr"
                    value={hdr}
                    onChange={handleInputChange}
                >
                    <option value="nopref">No preference</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
        </div>
    );
};

export default OptionalFilterForm;
