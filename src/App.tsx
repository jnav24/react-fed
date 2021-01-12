import React, { ReactElement } from 'react';

import Card from './components/Card';
import { CardType } from './@types/card';

const App = (): ReactElement => {
    const cards: Array<CardType> = [
        {
            image: 'lake-inniscarra-thumb.jpg',
            thumbnail: 'lake-inniscarra-trainer.jpg',
            title: 'Lake Inniiscarra, Ireland -- Pyramid',
            workouts: 3,
            time: '30:53',
            distance: '6,248 M',
            details: 'url here',
        },
        {
            image: 'performance-series-thumb.jpg',
            thumbnail: 'performance-series-trainer.jpg',
            title: 'Performance Series',
            workouts: 9,
        },
        {
            image: 'slow-pulls-thumb.jpg',
            thumbnail: 'slow-pulls-trainer.jpg',
            title: 'Slow Pulls and Fast Intervals',
            workouts: 11,
            time: '44:13',
            distance: '9,948 M',
        },
        {
            image: '20-minutes-to-toned-thumb.jpg',
            thumbnail: '20-minutes-to-toned-trainer.jpg',
            title: '20 Minutes to Toned',
            workouts: 12,
        },
        {
            image: 'charles-race-thumb.jpg',
            thumbnail: 'charles-race-trainer.jpg',
            title: 'Charles Race, Boston, Massachusetts',
            workouts: 7,
            time: '36:22',
            distance: '8,648 M',
        },
        {
            image: 'full-body-hiit-thumb.jpg',
            thumbnail: 'full-body-hiit-trainer.jpg',
            title: 'Full-Body HIIT Series',
            workouts: 12,
        },
        {
            image: 'kafue-river-thumb.jpg',
            thumbnail: 'kafue-river-trainer.jpg',
            title: 'Kafue River, Zambia -- Power Stroke Pyramid',
            workouts: 9,
            time: '22:22',
            distance: '4,660 M',
        },
        {
            image: 'shred-and-burn-thumb.jpg',
            thumbnail: 'shred-and-burn-trainer.jpg',
            title: 'Shred & Burn Series',
            workouts: 16,
        },
    ];

    return (
        <div className="mx-auto flex flex-row flex-wrap">
            {cards.map((card, int) => (
                <Card key={int} data={card} />
            ))}
        </div>
    );
};

export default App;
