import React, { useState, useEffect } from 'react';

interface Monitor {
    id: number;
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

const RecommendationForm: React.FC = () => {
    const [monitors, setMonitors] = useState<Monitor[]>([]);

    useEffect(() => {
        fetch('/api/monitor-recommendations')
            .then((res) => res.json())
            .then((data) => setMonitors(data));
    }, []);

    return (
        <div>
            <h2>Recommendations:</h2>
            {monitors.map((monitor) => (
                <div key={monitor.id}>
                    <h3>{monitor.name}</h3>
                    <p>Resolution: {monitor.resolution}</p>
                    <p>Refresh Rate: {monitor.refreshRate} Hz</p>
                    <p>Panel Type: {monitor.panel}</p>
                    <p>Size: {monitor.size}"</p>
                    <p>Cost: ${monitor.cost.toFixed(2)}</p>
                    <p>Minimum GPU: {monitor.minGpu}</p>
                    <p>Special Features: {monitor.specialFeatures}</p>
                    <p>Curved: {monitor.curve ? 'Yes' : 'No'}</p>
                    <p>Aspect Ratio: {monitor.aspectRatio}</p>
                    <p>Reviews: {monitor.reviews.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default RecommendationForm;
