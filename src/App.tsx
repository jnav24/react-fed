import React, {ReactElement} from 'react';

import Card from './components/Card';

type CardType = {
    image: string,
    thumbnail: string;
    title: string;
    workouts: number;
    details?: string;
    selected: boolean;
}

const App = (): ReactElement => {
    const cards: Array<CardType> = [];

    return (
        <div className="container mx-auto">
            <Card />
        </div>
    );
};

export default App;
