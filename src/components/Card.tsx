import React, { ReactElement, useEffect, useState } from 'react';

import { CardType } from '../@types/card';
import ClockIcon from './icons/ClockIcon';
import ListIcon from './icons/ListIcon';
import PaperClipIcon from './icons/PaperClipIcon';

type CardProps = {
    data: CardType;
};

const Card: React.FC<CardProps> = ({ data }): ReactElement => {
    const [img, setImg] = useState<null | string>(null);
    const [thumb, setThumb] = useState<null | string>(null);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        (async () => {
            setImg((await import(`../images/${data.image}`)).default ?? null);
            setThumb(
                (await import(`../images/${data.thumbnail}`)).default ?? null
            );
        })();
    }, []);

    return (
        <div
            className={`card bg-white rounded-md w-1/5 mr-6 mb-6 transition duration-300 ${
                !selected ? 'shadow' : 'shadow-xl'
            }`}
            onClick={() => setSelected(!selected)}
        >
            {img && (
                <div className="relative overflow-x-hidden">
                    <div className="absolute inset-y-0 right-0 bg-black bg-opacity-50 h-full w-1/3 text-white flex flex-col justify-center items-center card-workouts">
                        <p className="text-2xl text-white mb-4 font-bold">
                            {data.workouts}
                        </p>
                        <p className="text-gray-100 uppercase text-sm">
                            Workouts
                        </p>
                        <ListIcon className="text-gray-100 w-8 h-8" />
                    </div>
                    <img src={img} alt="" className="object-cover w-full" />
                </div>
            )}
            <div className="p-4">
                <div className="flex flex-row items-start justify-between">
                    <h2 className="w-11/12 text-xl font-bold">{data.title}</h2>
                    {thumb && <img src={thumb} alt="" />}
                </div>

                <div className="flex flex-row items-center justify-start my-2">
                    {data.time && (
                        <>
                            <ClockIcon className="text-gray-500 w-3 h-3" />
                            <p className="text-sm mx-1">{data.time}</p>
                        </>
                    )}
                    {data.distance && (
                        <>
                            <PaperClipIcon className="text-gray-500 w-3 h-3" />
                            <p className="text-sm mx-1">{data.distance}</p>
                        </>
                    )}
                </div>

                {data.details && (
                    <a
                        href="#"
                        className="text-link uppercase font-bold hover:underline"
                    >
                        View Details
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
