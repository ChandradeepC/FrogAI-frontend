import React, { useState, useEffect } from 'react';

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
            <h2>Recommendations:</h2>
            {monitorRecommendations.map((monitor) => (
                <div>
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
