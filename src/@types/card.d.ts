declare namespace Card {
    type CardType = {
        image: string,
        thumbnail: string;
        title: string;
        workouts: number;
        details?: string;
        time?: string;
        distance?: string;
    }
}

export = Card
