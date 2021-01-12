import React, { ReactElement, useEffect, useState } from 'react';

import ClockIcon from './icons/ClockIcon';
import ListIcon from './icons/ListIcon';
import PaperClipIcon from './icons/PaperClipIcon';

const Card = (): ReactElement => {
    const [img, setImg] = useState<null | string>(null);
    const [thumb, setThumb] = useState<null | string>(null);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        (async () => {
            setImg((await import('../images/20-minutes-to-toned-thumb.jpg')).default ?? null);
            setThumb((await import('../images/20-minutes-to-toned-trainer.jpg')).default ?? null);
        })();
    }, []);

    return (
        <div className={`card bg-white rounded-md w-1/4 transition duration-300 ${!selected ? 'shadow' : 'shadow-xl'}`} onClick={() => setSelected(!selected)}>
            {img && (
                <div className="relative overflow-x-hidden">
                    <div className="absolute inset-y-0 right-0 bg-black bg-opacity-50 h-full w-1/3 text-white flex flex-col justify-center items-center card-workouts">
                        <p className="text-2xl text-white mb-4 font-bold">12</p>
                        <p className="text-gray-100 uppercase text-sm">Workouts</p>
                        <ListIcon className="text-gray-100 w-8 h-8" />
                    </div>
                    <img src={img} alt=""/>
                </div>
            )}
            <div className="p-4">
                <div className="flex flex-row items-start justify-between">
                    <h2 className="w-11/12 text-xl font-bold">Lake Inniiscarra, Ireland -- Pyramid</h2>
                    {thumb && <img src={thumb} alt=""/>}
                </div>

                <div className="flex flex-row items-center justify-start my-2">
                    <ClockIcon className="text-gray-500 w-3 h-3" />
                    <p className="text-sm mx-1">30:53</p>
                    <PaperClipIcon className="text-gray-500 w-3 h-3" />
                    <p className="text-sm mx-1">6,248 M</p>
                </div>

                <a href="#" className="text-link uppercase font-bold hover:underline">View Details</a>
            </div>
        </div>
    );
};

export default Card;
