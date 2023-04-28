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
}

interface Monitor {
    name: string;
    resolution: string;
    refreshRate: number;
    panel: string;
    size: number;
    cost: number;
    minGpu: string;
    specialFeatures: string;
    curve: boolean;
    aspectRatio: string;
    reviews: string[];
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
    backlight
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
            backlight
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
        backlight
    ]);

    return (
        <div>
            {/* <h2>Recommendations:</h2> */}
            {monitorRecommendations.map((monitor) => (
                <div key={monitor.name} className="monitor-box">
                    <h3>
                        <span>{monitor.name}</span>
                        <span className="cost">${monitor.cost.toFixed(0)}</span>
                    </h3>
                    <p>Resolution: {monitor.resolution}</p>
                    <p>Refresh rate: {monitor.refreshRate} Hz</p>
                    <p>Panel: {monitor.panel}</p>
                    <p>Size: {monitor.size}"</p>
                    {/* <p>Minimum GPU: {monitor.minGpu}</p> */}
                    {monitor.specialFeatures && (
                        <div>
                            <p>Notes: {monitor.specialFeatures}</p>
                        </div>
                    )}
                    <p>Curved: {monitor.curve}</p>
                    <p>Aspect ratio: {monitor.aspectRatio}</p>
                    <p>
                        Approved reviews:{' '}
                        {monitor.reviews.length > 0 ? (
                            monitor.reviews.map((reviewUrl) => (
                                <div key={reviewUrl}>
                                    &#8226;&nbsp;{' '}
                                    <a
                                        href={reviewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {reviewUrl}
                                    </a>
                                </div>
                            ))
                        ) : (
                            <span>None yet</span>
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default RecommendationForm;
