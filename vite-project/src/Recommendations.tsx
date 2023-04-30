import React, { useState, useEffect } from 'react';
import './Recommendations.css';

interface Props {
    pcGpu: string;
    mac: string;
    consoles: string;
    budget: number;
    motion: string;
    pq: string;
    sharp: string;
    print: string;
    edit: string;
    grade: string;
    aspect: string;
    curve: string;
    size: string;
    res: string;
    minRR: string;
    panel: string;
    backlight: string;
    casual: string;
    comp: string;
    text: string;
    media: string;
    mode: string;
    hdr: string;
}

interface Monitor {
    name: string;
    motion: string;
    pq: string;
    sharp: string;
    resolution: string;
    refreshRate: number;
    panel: string;
    size: number;
    cost: number;
    minGpu: string;
    specialFeatures: string;
    curve: boolean;
    aspectRatio: string;
    adobeRgb: string;
    hdr: string;
    reviews: string[][];
}

const RecommendationForm: React.FC<Props> = ({
    pcGpu,
    mac,
    consoles,
    budget,
    motion,
    pq,
    sharp,
    print,
    edit,
    grade,
    aspect,
    curve,
    size,
    res,
    minRR,
    panel,
    backlight,
    casual,
    comp,
    text,
    media,
    mode,
    hdr
}) => {
    const [monitorRecommendations, setMonitorRecommendations] = useState<
        Monitor[]
    >([]);

    useEffect(() => {
        const data = {
            pcGpu,
            mac,
            consoles,
            budget,
            motion,
            pq,
            sharp,
            print,
            edit,
            grade,
            aspect,
            curve,
            size,
            res,
            minRR,
            panel,
            backlight,
            casual,
            comp,
            media,
            text,
            mode,
            hdr
        };

        fetch('http://127.0.0.1:5000/api/monitor-recommendations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                setMonitorRecommendations(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [
        pcGpu,
        mac,
        consoles,
        budget,
        motion,
        pq,
        sharp,
        print,
        edit,
        grade,
        aspect,
        curve,
        size,
        res,
        minRR,
        panel,
        backlight,
        mode,
        casual,
        comp,
        text,
        media,
        hdr
    ]);

    return (
        <div>
            {print === 'yes' || edit === 'yes' || grade === 'yes' ? (
                <div>
                    <div className="monitor-box">
                        <h3>
                            <span>Calibrite ColorChecker</span>
                            <span className="cost"> $170-320</span>
                        </h3>
                        <p>
                            <label>Display:</label> slower; upto 1000 nits
                            <span></span>
                        </p>
                        <p>
                            <label>Display Pro retail:</label> faster; upto 1000
                            nits
                            <span></span>
                        </p>
                        <p>
                            <label>Display Pro OEM / Plus:</label> faster; upto
                            2000 nits<span></span>
                        </p>
                        <p>
                            <label></label>{' '}
                            <a
                                href={
                                    'https://www.youtube.com/watch?v=f2nVNxx1IHo'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Calibration guide
                            </a>
                        </p>
                    </div>
                    <div className="medium-plus">+</div>
                </div>
            ) : null}
            {monitorRecommendations.map((monitor) => (
                <div key={monitor.name} className="monitor-box">
                    <h3>
                        <span>{monitor.name}</span>
                        <span className="cost">${monitor.cost.toFixed(0)}</span>
                    </h3>
                    <div className="spec-grid">
                        <div className="grid-item">
                            <p>
                                <label>Resolution:</label>{' '}
                                <span>{monitor.resolution}</span>
                            </p>
                            <p>
                                <label>Refresh rate:</label>{' '}
                                <span>{monitor.refreshRate} Hz</span>
                            </p>
                            <p>
                                <label>Panel:</label>{' '}
                                <span>{monitor.panel}</span>
                            </p>
                            <p>
                                <label>Size:</label>{' '}
                                <span>{monitor.size}"</span>
                            </p>
                        </div>
                        <div className="grid-item">
                            {/* <p>Minimum GPU: {monitor.minGpu}</p> */}
                            <p>
                                <label>Curved:</label>{' '}
                                <span>{monitor.curve}</span>
                            </p>
                            <p>
                                <label>Aspect ratio:</label>{' '}
                                <span>{monitor.aspectRatio}</span>
                            </p>
                            <p>
                                <label>Adobe RGB:</label>{' '}
                                <span>{monitor.adobeRgb}</span>
                            </p>
                            <p>
                                <label>HDR:</label> <span>{monitor.hdr}</span>
                            </p>
                        </div>
                    </div>
                    {monitor.specialFeatures !== 'no' && (
                        <p>
                            <label>Notes:</label>{' '}
                            <span>{monitor.specialFeatures}</span>
                        </p>
                    )}
                    {monitor.reviews[0][0] !== 'no' && (
                        <p>
                            <label>Reviews:</label>{' '}
                            {monitor.reviews.map((reviewUrl) => (
                                // <div key={reviewUrl[0]}>
                                <a
                                    href={reviewUrl[1]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {reviewUrl[0]}&nbsp;&nbsp;&nbsp;
                                </a>
                                // {</div> }
                            ))}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RecommendationForm;
